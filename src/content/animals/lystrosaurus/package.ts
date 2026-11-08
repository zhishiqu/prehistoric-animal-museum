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
  id: 'lystrosaurus',
  status: 'published',
  kind: 'other-prehistoric-animal',
  habitat: 'land',
  atmosphere: 'plains',
  content: { 'zh-CN': zhCN, en },
  presentation: {
    initialYawDegrees: -90,
    landscapeVerticalOffset: 0.06,
    portraitVerticalOffset: 0.05,
    portraitSafeAreaPadding: 0.17,
    safeAreaPadding: 0.14,
    preciseBounds: true,
    shadow: 'ground',
    shadowDepthScale: 0.9,
    shadowOpacity: 0.52,
    shadowScale: 0.46,
    toneMappingExposure: 0.98,
    viewAzimuthDegrees: -52.2,
    viewDistanceScale: 1,
    viewPolarDegrees: 86.6,
  },
  animation: { clip: 'Idle', loop: 'repeat', speed: 1 },
  narration,

  provenance,
})
