import { ReactNode } from 'react'

export interface Slide {
  type: 'introduction' | 'info' | 'question' | 'conclusion'
  content: ReactNode
  options?: string[]
  correctAnswer?: string
  correctAnswers?: string[]
  explanation?: string
  multipleChoice?: boolean
}
