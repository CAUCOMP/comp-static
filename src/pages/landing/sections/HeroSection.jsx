import React from 'react'
import bgLogo from '@/assets/logo/bgLogo.png'

const HeroSection = () => {
  return (
    <section 
        className = "min-h-screen bg-no-repeat bg-center flex items-center"
        style={{backgroundImage: `url(${bgLogo})`, backgroundSize: '100% 100%'}}
    >
        <main className="flex flex-col justify-center text-8xl font-semibold p-[45px]">
            <div>중앙대학교</div>
            <div>웹/앱 개발동아리</div>
            <div>COMP</div>
        </main>
    </section>
  )
}

export default HeroSection