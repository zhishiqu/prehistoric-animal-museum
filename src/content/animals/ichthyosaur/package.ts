import { definePublishedAnimal } from '../../types'
import { en } from './content.en'
import { zhCN } from './content.zh-CN'
import { provenance } from './provenance'

export const animalDefinition = definePublishedAnimal({
  id: 'ichthyosaur',
  status: 'published',
  kind: 'marine-reptile',
  habitat: 'water',
  atmosphere: 'underwater',
  content: { 'zh-CN': zhCN, en },
  presentation: {
    initialYawDegrees: 0,
    landscapeHorizontalOffset: 0,
    portraitHorizontalOffset: 0,
    portraitSafeAreaPadding: 0.1,
    preciseBounds: true,
    safeAreaPadding: 0.1,
    shadow: 'none',
    viewAzimuthDegrees: 72.3,
    viewDistanceScale: 1,
    viewPolarDegrees: 64.9,
  },
  animation: {
    clip: 'Idle',
    loop: 'repeat',
    speed: 0.95,
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
