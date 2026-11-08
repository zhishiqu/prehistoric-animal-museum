import { definePublishedAnimal } from '../../types'
import { en } from './content.en'
import { zhCN } from './content.zh-CN'
import { provenance } from './provenance'

export const animalDefinition = definePublishedAnimal({
  id: "mosasaurus",
  status: 'published',
  kind: "marine-reptile",
  habitat: "water",
  atmosphere: "underwater",
  content: { 'zh-CN': zhCN, en },
  presentation: {
    "initialYawDegrees": 0,
    "portraitSafeAreaPadding": 0.14,
    "safeAreaPadding": 0.1,
    "preciseBounds": true,
    "shadow": "none",
    "toneMappingExposure": 1.16,
    viewAzimuthDegrees: -90.9,
    viewDistanceScale: 1,
    viewPolarDegrees: 92.2,
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
