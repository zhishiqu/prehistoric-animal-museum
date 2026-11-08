import type { IncomingMessage, ServerResponse } from 'node:http'
import { writeAnimalPresentation } from './animal-presentation-writer'

const MAX_BODY_BYTES = 256 * 1024

/**
 * Development-only endpoint used by the in-app pose editor to write the
 * adjusted presentation back to the animal's source package.
 */
export async function saveAnimalPresentation(
  request: IncomingMessage,
  response: ServerResponse,
): Promise<void> {
  response.setHeader('Content-Type', 'application/json; charset=utf-8')
  response.setHeader('Cache-Control', 'no-store')
  const host = request.headers.host
  const origin = request.headers.origin
  const allowedOrigins = host
    ? [`http://${host}`, `https://${host}`]
    : []
  if (
    request.method !== 'POST' ||
    !origin ||
    !allowedOrigins.includes(origin)
  ) {
    response.statusCode = 405
    response.end(
      JSON.stringify({
        error: 'Same-origin local presentation save POST required.',
      }),
    )
    return
  }
  try {
    const chunks: Buffer[] = []
    let size = 0
    for await (const raw of request) {
      const chunk = Buffer.isBuffer(raw) ? raw : Buffer.from(raw as Uint8Array)
      size += chunk.length
      if (size > MAX_BODY_BYTES) {
        throw new Error('Presentation payload exceeds the local input ceiling.')
      }
      chunks.push(chunk)
    }
    const input = JSON.parse(Buffer.concat(chunks).toString()) as {
      animalId?: unknown
      presentation?: unknown
    }
    const file = writeAnimalPresentation(input.animalId, input.presentation)
    response.statusCode = 200
    response.end(JSON.stringify({ ok: true, file }))
  } catch (error) {
    response.statusCode = 400
    response.end(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : 'Presentation save failed.',
      }),
    )
  }
}
