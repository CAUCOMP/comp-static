import { useEffect, useState } from 'react'
import study from '@/assets/slider/study.jpeg'
import session from '@/assets/slider/session.jpeg'
import project from '@/assets/slider/project.png'
import compNight from '@/assets/slider/comp-night.jpeg'

const slides = [
    { image: study, alt: '동아리방에서 함께 공부하는 COMP 구성원들', fit: 'object-cover' },
    { image: session, alt: '강의실에서 진행하는 COMP 정규 세션', fit: 'object-cover' },
    { image: project, alt: 'COMP가 제작한 사주 프로젝트 홍보 포스터', fit: 'object-contain' },
    { image: compNight, alt: '콤프인의 밤에서 함께 찍은 단체 사진', fit: 'object-cover' },
]

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length)
        }, 4000)
        
        return () => clearInterval(timer)
    }, [])

  return (
    <div className="relative w-full max-w-90 h-110 shrink-0 overflow-hidden rounded-xl">
        {slides.map((slide, index) => (
            <img
                key={slide.image}
                src={slide.image}
                alt={slide.alt}
                aria-hidden={index !== current}
                className={`absolute inset-0 w-full h-full ${slide.fit} transition-opacity duration-1000
                            ${index === current ? 'opacity-100' : 'opacity-0'}`}
            />
        ))}
    </div>
  )
}

export default ImageSlider
