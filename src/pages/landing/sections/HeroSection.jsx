import bgLogo from '@/assets/logo/bgLogo.png'
import ScrollBar from '@/components/ScrollBar'

const HeroSection = () => {
  return (
    <section 
        className = "relative min-h-screen bg-no-repeat bg-center flex items-center"
        style={{backgroundImage: `url(${bgLogo})`, backgroundSize: '100% 100%'}}
    >
        <div className="flex flex-col justify-center text-[clamp(1.75rem,7vw,6rem)] font-semibold p-6 md:p-[45px]">
            <div>중앙대학교</div>
            <div>웹/앱 개발동아리</div>
            <div>COMP</div>
        </div>
        <ScrollBar targetId="introduction" />
    </section>
  )
}

export default HeroSection
