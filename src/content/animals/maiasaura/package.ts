import { definePublishedAnimal } from '../../types'
import { en } from './content.en'
import { zhCN } from './content.zh-CN'
import { provenance } from './provenance'

export const animalDefinition = definePublishedAnimal({
  id: 'maiasaura',
  status: 'published',
  kind: 'dinosaur',
  habitat: 'land',
  atmosphere: 'plains',
  content: { 'zh-CN': zhCN, en },
  presentation: {
    cameraLightScale: 1.4,
    initialYawDegrees: -90,
    landscapeVerticalOffset: 0.04,
    portraitVerticalOffset: 0.04,
    portraitSafeAreaPadding: 0.12,
    safeAreaPadding: 0.14,
    preciseBounds: true,
    shadow: 'ground',
    shadowOpacity: 0.38,
    shadowScale: 0.32,
    shadowDepthScale: 0.8,
    shadowHorizontalOffset: -0.98,
    shadowYOffset: -0.04,
    toneMappingExposure: 1.08,
    viewAzimuthDegrees: -63.5,
    viewDistanceScale: 1,
    viewPolarDegrees: 83.4,
  },
  animation: {
    clip: 'Idle',
    loop: 'repeat',
    speed: 0.9,
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
