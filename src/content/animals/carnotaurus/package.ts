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
  id: 'carnotaurus',
  status: 'published',
  kind: 'dinosaur',
  habitat: 'land',
  atmosphere: 'plains',
  content: { 'zh-CN': zhCN, en },
  presentation: {
    cameraLightScale: 1.22,
    initialYawDegrees: -90,
    landscapeVerticalOffset: 0.1,
    portraitVerticalOffset: 0.08,
    portraitSafeAreaPadding: 0.03,
    safeAreaPadding: 0.12,
    preciseBounds: true,
    shadow: 'ground',
    shadowDepthOffset: -0.5,
    shadowOpacity: 0.62,
    shadowScale: 0.36,
    toneMappingExposure: 1.08,
    viewAzimuthDegrees: -85.8,
    viewDistanceScale: 1,
    viewPolarDegrees: 83.3,
  },
  animation: { clip: 'Idle', loop: 'repeat', speed: 1 },
  narration,

  provenance,
})
