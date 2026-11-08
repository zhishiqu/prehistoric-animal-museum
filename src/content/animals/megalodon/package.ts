import { definePublishedAnimal } from '../../types'
import { en } from './content.en'
import { zhCN } from './content.zh-CN'
import { provenance } from './provenance'

export const animalDefinition = definePublishedAnimal({
  id: 'megalodon',
  status: 'published',
  kind: 'other-prehistoric-animal',
  habitat: 'water',
  atmosphere: 'underwater',
  content: { 'zh-CN': zhCN, en },
  presentation: {
    cameraLightScale: 2.1,
    initialYawDegrees: -90,
    landscapeHorizontalOffset: 0,
    landscapeVerticalOffset: 0.04,
    portraitHorizontalOffset: 0,
    portraitSafeAreaPadding: 0.16,
    portraitVerticalOffset: 0.04,
    safeAreaPadding: 0.12,
    preciseBounds: true,
    shadow: 'none',
    toneMappingExposure: 1.34,
    viewAzimuthDegrees: -63,
    viewDistanceScale: 1,
    viewPolarDegrees: 86.8,
  },
  animation: {
    clip: 'Idle',
    loop: 'repeat',
    speed: 1,
  },
  narration: {
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
  },
  provenance,
})
