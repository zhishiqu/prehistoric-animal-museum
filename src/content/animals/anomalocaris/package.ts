import { definePublishedAnimal } from '../../types'
import { en } from './content.en'
import { zhCN } from './content.zh-CN'
import { provenance } from './provenance'

const narration = {
  'zh-CN': {
    status: 'ready',
    sourcePath: 'audio/narration.zh-CN.mp3',
    mimeType: 'audio/mpeg',
    speaker: 'Serena',
    language: 'Chinese',
    humanReviewStatus: 'approved',
  },
  en: {
    status: 'ready',
    sourcePath: 'audio/narration.en.mp3',
    mimeType: 'audio/mpeg',
    speaker: 'Serena',
    language: 'English',
    humanReviewStatus: 'approved',
  },
} as const

export const animalDefinition = definePublishedAnimal({
  id: 'anomalocaris',
  status: 'published',
  kind: 'other-prehistoric-animal',
  habitat: 'water',
  atmosphere: 'underwater',
  content: { 'zh-CN': zhCN, en },
  presentation: {
    cameraLightScale: 1.16,
    initialYawDegrees: 180,
    portraitSafeAreaPadding: 0.03,
    safeAreaPadding: 0.1,
    preciseBounds: true,
    shadow: 'none',
    toneMappingExposure: 1.0,
    viewAzimuthDegrees: -126.6,
    viewDistanceScale: 1,
    viewPolarDegrees: 83.3,
  },
  animation: { clip: 'Idle', loop: 'repeat', speed: 1 },
  narration,

  provenance,
})
