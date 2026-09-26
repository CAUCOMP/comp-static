import React from 'react'
import slide1 from '@/assets/slider/slide1.jpeg'
import slide2 from '@/assets/slider/slide2.jpeg'
import slide3 from '@/assets/slider/slide3.jpeg'
import slide4 from '@/assets/slider/slide4.jpeg'
import { useState } from 'react'
import { useEffect } from 'react'

const slides = [slide1, slide2, slide3, slide4]

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length)
        }, 4000)
        
        return () => clearInterval(timer)
    }, [])

  return (
    <div className="relative w-90 h-110 overflow-hidden rounded-xl">
        {slides.map((slide, index) => (
            <img
                key={index}
                src={slide}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
                            ${index === current ? 'opacity-100' : 'opacity-0'}`}
            />
        ))}
    </div>
  )
}

export default ImageSlider