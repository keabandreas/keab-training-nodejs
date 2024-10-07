import React, { useState } from 'react'
import { Slide } from '../types/training'

interface TrainingPageProps {
  slides: Slide[]
}

const TrainingPage: React.FC<TrainingPageProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const currentSlideContent = slides[currentSlide]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {currentSlideContent.content}
        
        {currentSlideContent.type === 'question' && (
          <div className="mt-4">
            {currentSlideContent.options?.map((option, index) => (
              <button
                key={index}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mt-2"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentSlide === 0}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentSlide === slides.length - 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TrainingPage

