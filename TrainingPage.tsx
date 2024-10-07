import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Slide } from '../types/training'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/use-toast'

interface TrainingPageProps {
  slides: Slide[]
}

const TrainingPage: React.FC<TrainingPageProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [userAnswers, setUserAnswers] = useState<string[]>([])
  const [feedback, setFeedback] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
  })

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))
    setFeedback(null)
    setUserAnswers([])
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
    setFeedback(null)
    setUserAnswers([])
  }

  const handleAnswer = (answer: string) => {
    const slide = slides[currentSlide]
    if (slide.type === 'question' && answer === slide.correctAnswer) {
      setFeedback(`Correct! ${slide.explanation}`)
      setTimeout(handleNext, 1500)
    } else {
      setFeedback(`Incorrect. ${slide.explanation} Please try again.`)
    }
  }

  const handleMultipleAnswers = () => {
    const slide = slides[currentSlide]
    if (slide.type === 'question' && slide.correctAnswers) {
      const isCorrect =
        userAnswers.length === slide.correctAnswers.length &&
        userAnswers.every((answer) => slide.correctAnswers?.includes(answer))

      if (isCorrect) {
        setFeedback(`Correct! ${slide.explanation}`)
        setTimeout(handleNext, 1500)
      } else {
        setFeedback(`Incorrect. ${slide.explanation} Please try again.`)
      }
    }
  }

  const handleCheckboxChange = (option: string) => {
    setUserAnswers((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    )
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    if (Object.values(formData).every((value) => value)) {
      toast({
        title: 'Training Completed',
        description: `Thank you, ${formData.firstName} ${formData.lastName}! An email notification has been sent to andreas.bergholtz@karlshamnenergi.se`,
      })
      console.log(`Email sent to andreas.bergholtz@karlshamnenergi.se: ${formData.firstName} ${formData.lastName} (${formData.email}) has completed the training.`)
    } else {
      toast({
        title: 'Error',
        description: 'Please fill out all fields before submitting.',
        variant: 'destructive',
      })
    }
  }

  const slide = slides[currentSlide]
  const progress = ((currentSlide + 1) / slides.length) * 100

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Karlshamn Energi Training</h1>
      <Progress value={progress} className="mb-8" />
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        {slide.content.image && (
          <img src={slide.content.image} alt={slide.content.title} className="w-full max-h-80 object-contain mb-6" />
        )}
        <h2 className="text-2xl font-bold mb-4 text-center">{slide.content.title}</h2>
        {slide.type !== 'question' && (
          <p className="text-center mb-4">{slide.content.text}</p>
        )}
        {slide.type === 'question' && (
          <>
            <p className="text-center mb-4">{slide.content.question}</p>
            <div className="flex flex-col items-center space-y-4">
              {slide.multipleChoice ? (
                <>
                  {slide.options?.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={userAnswers.includes(option)}
                        onCheckedChange={() => handleCheckboxChange(option)}
                      />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                  <Button onClick={handleMultipleAnswers}>Submit</Button>
                </>
              ) : (
                slide.options?.map((option) => (
                  <Button key={option} onClick={() => handleAnswer(option)}>
                    {option}
                  </Button>
                ))
              )}
            </div>
          </>
        )}
        {slide.type === 'conclusion' && (
          <form className="space-y-4 mt-6">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</Label>
                <Input
                  type={key === 'email' ? 'email' : 'text'}
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleFormChange}
                  required
                />
              </div>
            ))}
            <Button onClick={handleSubmit}>Send</Button>
          </form>
        )}
        {feedback && (
          <div
            className={`mt-4 p-4 rounded-md ${
              feedback.startsWith('Correct') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {feedback}
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <Button onClick={handlePrev} disabled={currentSlide === 0}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button onClick={handleNext} disabled={currentSlide === slides.length - 1}>
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default TrainingPage