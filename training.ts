import { ReactNode } from 'react'

export interface SlideContent {
  title: string
  image?: string
  text: string
  question?: string
}

export interface Slide {
  type: 'introduction' | 'info' | 'question' | 'conclusion'
  content: SlideContent
  options?: string[]
  correctAnswer?: string
  correctAnswers?: string[]
  explanation?: string
  multipleChoice?: boolean
}