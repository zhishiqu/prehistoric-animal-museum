import { definePublishedAnimal } from '../../types'
import { en } from './content.en'
import { zhCN } from './content.zh-CN'
import { provenance } from './provenance'

export const animalDefinition = definePublishedAnimal({
  id: "sauropelta",
  status: 'published',
  kind: "dinosaur",
  habitat: "land",
  atmosphere: "plains",
  content: { 'zh-CN': zhCN, en },
  presentation: {
    "initialYawDegrees": 0,
    "portraitSafeAreaPadding": 0.14,
    "safeAreaPadding": 0.12,
    "preciseBounds": true,
    "shadow": "ground",
    "shadowOpacity": 0.32,
    "shadowScale": 0.58,
    "toneMappingExposure": 1.08,
    viewAzimuthDegrees: -34.1,
    viewDistanceScale: 1,
    viewPolarDegrees: 80.9,
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
