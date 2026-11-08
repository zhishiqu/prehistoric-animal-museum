import { definePublishedAnimal } from '../../types'
import { en } from './content.en'
import { zhCN } from './content.zh-CN'
import { provenance } from './provenance'

export const animalDefinition = definePublishedAnimal({
  id: "tupandactylus",
  status: 'published',
  kind: "pterosaur",
  habitat: "air",
  atmosphere: "air",
  content: { 'zh-CN': zhCN, en },
  presentation: {
    "cameraLightScale": 1.45,
    "initialYawDegrees": -15,
    "portraitSafeAreaPadding": 0.16,
    "preciseBounds": true,
    "safeAreaPadding": 0.1,
    "shadow": "none",
    "toneMappingExposure": 1.25,
    viewAzimuthDegrees: -130,
    viewDistanceScale: 1,
    viewPolarDegrees: 116.9,
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
