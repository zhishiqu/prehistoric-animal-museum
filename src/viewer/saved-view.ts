import type { ViewerModelDescriptor } from './viewer-model-descriptor'

export interface SavedAnimalView {
  azimuthDegrees: number
  polarDegrees: number
  distanceScale: number
}

const STORAGE_KEY_PREFIX = 'museum:animal-view:v1:'

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

const isFiniteNumber = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value)

export function readSavedAnimalView(animalId: string): SavedAnimalView | null {
  if (typeof localStorage === 'undefined') {
    return null
  }
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${animalId}`)
    if (!raw) {
      return null
    }
    const parsed = JSON.parse(raw) as Partial<SavedAnimalView>
    if (
      !isFiniteNumber(parsed.azimuthDegrees) ||
      !isFiniteNumber(parsed.polarDegrees) ||
      !isFiniteNumber(parsed.distanceScale)
    ) {
      return null
    }
    return {
      azimuthDegrees: clamp(parsed.azimuthDegrees, -180, 180),
      polarDegrees: clamp(parsed.polarDegrees, 1, 179),
      distanceScale: clamp(parsed.distanceScale, 0.2, 2.25),
    }
  } catch {
    return null
  }
}

export function writeSavedAnimalView(
  animalId: string,
  view: SavedAnimalView,
): void {
  if (typeof localStorage === 'undefined') {
    return
  }
  try {
    localStorage.setItem(
      `${STORAGE_KEY_PREFIX}${animalId}`,
      JSON.stringify(view),
    )
  } catch {
    // Private browsing or a full quota should never break the exhibit.
  }
}

export function applySavedAnimalView(
  descriptor: ViewerModelDescriptor,
  animalId: string,
): ViewerModelDescriptor {
  const saved = readSavedAnimalView(animalId)
  if (!saved) {
    return descriptor
  }
  return {
    ...descriptor,
    presentation: {
      ...descriptor.presentation,
      view: saved,
    },
  }
}
