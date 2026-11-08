import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import ts from 'typescript'

const ANIMAL_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

const PRESENTATION_KEYS = {
  initialYawDegrees: [-180, 180],
  landscapeHorizontalOffset: [-0.3, 0.3],
  landscapeVerticalOffset: [-0.3, 0.3],
  portraitHorizontalOffset: [-0.3, 0.3],
  portraitVerticalOffset: [-0.3, 0.3],
  safeAreaPadding: [0, 0.42],
  portraitSafeAreaPadding: [0, 0.42],
  viewAzimuthDegrees: [-180, 180],
  viewPolarDegrees: [1, 179],
  viewDistanceScale: [0.2, 2.25],
} as const satisfies Record<string, readonly [number, number]>

type PresentationKey = keyof typeof PRESENTATION_KEYS

export type AnimalPresentationPatch = Partial<Record<PresentationKey, number>>

function parsePatch(input: unknown): AnimalPresentationPatch {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    throw new Error('presentation must be an object')
  }
  const patch: AnimalPresentationPatch = {}
  for (const [key, rawValue] of Object.entries(input)) {
    if (!(key in PRESENTATION_KEYS)) {
      throw new Error(`unsupported presentation field: ${key}`)
    }
    const [min, max] = PRESENTATION_KEYS[key as PresentationKey]
    if (typeof rawValue !== 'number' || !Number.isFinite(rawValue)) {
      throw new Error(`${key} must be a finite number`)
    }
    if (rawValue < min || rawValue > max) {
      throw new Error(`${key} must be between ${min} and ${max}`)
    }
    patch[key as PresentationKey] = Math.round(rawValue * 1000) / 1000
  }
  if (Object.keys(patch).length === 0) {
    throw new Error('presentation patch is empty')
  }
  return patch
}

function propertyName(node: ts.PropertyName): string {
  return ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)
    ? node.text
    : node.getText()
}

function replacePresentationLiteral(
  source: string,
  patch: AnimalPresentationPatch,
): string {
  const sourceFile = ts.createSourceFile(
    'package.ts',
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  )
  let presentationProperty: ts.PropertyAssignment | undefined
  const visit = (node: ts.Node) => {
    if (
      ts.isPropertyAssignment(node) &&
      propertyName(node.name) === 'presentation'
    ) {
      presentationProperty = node
      return
    }
    ts.forEachChild(node, visit)
  }
  visit(sourceFile)
  if (!presentationProperty) {
    throw new Error('package.ts has no presentation literal')
  }
  const literal = presentationProperty.initializer
  if (!ts.isObjectLiteralExpression(literal)) {
    throw new Error('presentation must be an object literal')
  }

  const preserved: string[] = []
  for (const property of literal.properties) {
    if (!ts.isPropertyAssignment(property)) {
      throw new Error('presentation may only contain plain fields')
    }
    const name = propertyName(property.name)
    if (name in patch) {
      continue
    }
    preserved.push(property.getText(sourceFile).replace(/,\s*$/, ''))
  }

  const start = literal.getStart(sourceFile)
  const lineStart = source.lastIndexOf('\n', start) + 1
  const linePrefix = source.slice(lineStart).match(/^[ \t]*/)?.[0] ?? ''
  const propertyIndent = `${linePrefix}  `
  const lines = ['{']
  for (const text of preserved) {
    lines.push(`${propertyIndent}${text},`)
  }
  for (const [key, value] of Object.entries(patch)) {
    lines.push(`${propertyIndent}${key}: ${value},`)
  }
  lines.push(`${linePrefix}}`)

  return (
    source.slice(0, start) +
    lines.join('\n') +
    source.slice(literal.getEnd())
  )
}

export function writeAnimalPresentation(
  animalId: unknown,
  rawPatch: unknown,
): string {
  if (typeof animalId !== 'string' || !ANIMAL_ID_PATTERN.test(animalId)) {
    throw new Error('invalid animal id')
  }
  const patch = parsePatch(rawPatch)
  const candidates = [
    resolve(process.cwd(), 'src/content/animals', animalId, 'package.ts'),
    resolve(process.cwd(), 'src/review/animals', animalId, 'package.ts'),
  ]
  const filePath = candidates.find((candidate) => existsSync(candidate))
  if (!filePath) {
    throw new Error(`no package.ts found for ${animalId}`)
  }
  const source = readFileSync(filePath, 'utf8')
  const updated = replacePresentationLiteral(source, patch)
  writeFileSync(filePath, updated)
  return filePath
}
