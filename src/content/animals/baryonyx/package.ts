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
  id: 'baryonyx',
  status: 'published',
  kind: 'dinosaur',
  habitat: 'land',
  atmosphere: 'plains',
  content: { 'zh-CN': zhCN, en },
  presentation: {
    initialYawDegrees: 90,
    landscapeVerticalOffset: 0.08,
    portraitVerticalOffset: 0.06,
    portraitSafeAreaPadding: 0.18,
    safeAreaPadding: 0.13,
    preciseBounds: true,
    shadow: 'ground',
    shadowDepthScale: 1.1,
    shadowOpacity: 0.58,
    shadowScale: 0.38,
    toneMappingExposure: 0.96,
    viewAzimuthDegrees: -142,
    viewDistanceScale: 1,
    viewPolarDegrees: 73.5,
  },
  animation: { clip: 'Idle', loop: 'repeat', speed: 1 },
  narration,

  provenance,
})
