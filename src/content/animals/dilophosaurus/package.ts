import { definePublishedAnimal } from '../../types'
import { en } from './content.en'
import { zhCN } from './content.zh-CN'
import { provenance } from './provenance'

export const animalDefinition = definePublishedAnimal({
  id: "dilophosaurus",
  status: 'published',
  kind: "dinosaur",
  habitat: "land",
  atmosphere: "plains",
  content: { 'zh-CN': zhCN, en },
  presentation: {
    "initialYawDegrees": 180,
    "landscapeHorizontalOffset": -0.03,
    "landscapeVerticalOffset": 0.1,
    "portraitVerticalOffset": 0.08,
    "portraitSafeAreaPadding": 0.16,
    "safeAreaPadding": 0.14,
    "preciseBounds": true,
    "shadow": "ground",
    "shadowOpacity": 0.58,
    "shadowScale": 0.38,
    "shadowDepthScale": 1.15,
    "shadowHorizontalOffset": -0.45,
    "toneMappingExposure": 1.05,
    viewAzimuthDegrees: -132.7,
    viewDistanceScale: 1,
    viewPolarDegrees: 79.3,
  },
  animation: {
    "clip": "Idle",
    "loop": "repeat",
    "speed": 1
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
