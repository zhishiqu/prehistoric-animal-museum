import { definePublishedAnimal } from '../../types'
import { en } from './content.en'
import { zhCN } from './content.zh-CN'
import { provenance } from './provenance'

export const animalDefinition = definePublishedAnimal({
  id: 'pachycephalosaurus',
  status: 'published',
  kind: 'dinosaur',
  habitat: 'land',
  atmosphere: 'forest',
  content: { 'zh-CN': zhCN, en },
  presentation: {
    initialYawDegrees: -90,
    landscapeVerticalOffset: 0.05,
    portraitHorizontalOffset: 0.08,
    portraitVerticalOffset: 0.07,
    safeAreaPadding: 0.1,
    shadow: 'ground',
    shadowOpacity: 0.6,
    shadowScale: 0.6,
    viewAzimuthDegrees: -145.5,
    viewDistanceScale: 1,
    viewPolarDegrees: 85.9,
  },
  animation: {
    clip: 'Idle',
    loop: 'repeat',
    speed: 0.8,
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
