import { FiCalendar, FiArrowUpRight } from 'react-icons/fi'

const ApplyPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-32 gap-12 p-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="text-center flex flex-col items-center gap-2 relative">
        <p className="text-blue-300/60 text-sm tracking-widest uppercase">Recruit</p>
        <h1 className="text-4xl font-semibold drop-shadow-[0_0_8px_rgba(147,197,253,0.3)]">
          COMP 모집 안내
        </h1>
        <div className="mt-1 px-4 py-1 border border-blue-400/30 rounded-full inline-flex items-center gap-2 text-blue-300/60 text-sm bg-blue-500/5">
          <FiCalendar />
          현재 모집 기간이 아닙니다.
        </div>
      </div>

      <div className="w-full max-w-[700px] flex flex-col items-center gap-8 text-center relative">
        <p className="text-white/60 leading-relaxed">
          다음 모집 일정은 추후 안내할 예정입니다.<br />
          모집 소식은 COMP 공식 인스타그램에서 확인해 주세요.
        </p>
        <a
          href="https://www.instagram.com/cau_comp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-10 py-4 border border-blue-400/20 text-blue-200 rounded-full hover:bg-blue-400/10"
        >
          <FiArrowUpRight className="text-xl" />
          모집 소식 확인하기
        </a>
      </div>
    </section>
  )
}

export default ApplyPage
