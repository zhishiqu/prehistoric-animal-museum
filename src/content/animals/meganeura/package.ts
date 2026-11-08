import { definePublishedAnimal } from '../../types'
import { en } from './content.en'
import { zhCN } from './content.zh-CN'
import { provenance } from './provenance'

export const animalDefinition = definePublishedAnimal({
  id: "meganeura",
  status: 'published',
  kind: "other-prehistoric-animal",
  habitat: "air",
  atmosphere: "air",
  content: { 'zh-CN': zhCN, en },
  presentation: {
    "cameraLightScale": 1.15,
    "initialYawDegrees": -18,
    "portraitSafeAreaPadding": 0.18,
    "preciseBounds": true,
    "safeAreaPadding": 0.1,
    "shadow": "none",
    "toneMappingExposure": 0.9,
    viewAzimuthDegrees: -82.5,
    viewDistanceScale: 1,
    viewPolarDegrees: 91.1,
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
