import downArrow from '@/assets/intro/down-arrow.svg'

const ScrollBar = ({ targetId }) => {
  return (
        <a
          href={`#${targetId}`}
          className="flex items-center absolute bottom-10 right-6 md:right-10 text-inherit text-lg md:text-2xl font-normal gap-2.5 no-underline hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-blue-300"
        >
            COMP 소개 
            <img src={downArrow} alt="" width="50" height="50" className="w-9 h-9 md:w-[50px] md:h-[50px]" />
        </a>
  )
}

export default ScrollBar
