import { Slide } from '../types/training'

export const slidesEn: Slide[] = [
  {
    type: 'introduction',
    content: {
      title: 'Welcome to Karlshamn Energi',
      image: 'https://im16.inviewer.se/skiss/99/99KEOU1WQI.jpg',
      text: 'It is important to us that security around our operations is maintained at a high level. We are a socially critical operation, and with that comes great responsibility. This responsibility also applies to you who are hired in some form by us. The rules of order and safety presented in this training are just a brief compilation of the regulations we are subject to.'
    }
  },
  {
    type: 'info',
    content: {
      title: 'General Security',
      text: 'Welcome to Karlshamn Energi. It is important to us that security around our operations is maintained at a high level. We are a socially critical operation, and with that comes great responsibility. This responsibility also applies to you who are hired in some form by us. The rules of order and safety presented in this training are just a brief compilation of the regulations we are subject to.'
    }
  },
  // ... Add all other slides here, following the same structure
  {
    type: 'question',
    content: {
      title: 'Question 1',
      question: 'Are you allowed to let people you know into the facility?'
    },
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
    explanation: 'You may let in people you know who have permission to be in the area & employees you recognize from Karlshamn Energi.'
  },
  // ... Add more question slides
  {
    type: 'conclusion',
    content: {
      title: 'Training Complete',
      text: 'Thank you for completing the Karlshamn Energi security training. Your commitment to maintaining our high security standards is appreciated.'
    }
  }
]