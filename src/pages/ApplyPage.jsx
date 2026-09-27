import { FiCalendar, FiClock, FiUsers, FiArrowUpRight } from 'react-icons/fi'

const timeline = [
  { step: '01', title: '서류 접수', description: '지원서 작성 및 제출' },
  { step: '02', title: '서류 발표', description: '합격자 개별 연락' },
  { step: '03', title: '면접', description: '대면 면접 진행' },
  { step: '04', title: '최종 발표', description: '최종 합격자 발표' },
]

const previousConditions = [
  '중앙대학교 서울캠퍼스 1, 2학년 재학생',
  '전공 무관, 초보자 환영',
  '1년 활동 가능자',
]

const ApplyPage = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center gap-12 overflow-hidden px-6 pb-20 pt-32 md:px-20">
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

      <div className="relative flex w-full max-w-[700px] flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 drop-shadow-[0_0_6px_rgba(96,165,250,0.3)]">
              <FiUsers className="text-sm text-blue-300" />
            </div>
            <h2 className="text-xl font-medium">지원 자격</h2>
          </div>

          <p className="pl-11 text-sm text-blue-300/60">지난 모집 기준이며, 다음 모집 공고에서 확정됩니다.</p>
          <div className="flex flex-col gap-2 pl-11">
            {previousConditions.map((condition) => (
              <div key={condition} className="flex items-start gap-3 text-base text-white/60">
                <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-blue-400/60" />
                <span>{condition}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 drop-shadow-[0_0_6px_rgba(96,165,250,0.3)]">
              <FiClock className="text-sm text-blue-300" />
            </div>
            <h2 className="text-xl font-medium">전형 일정</h2>
          </div>

          <p className="pl-11 text-sm text-blue-300/60">다음 모집 일정은 추후 안내할 예정입니다.</p>
          <ol className="flex flex-col pl-11">
            {timeline.map(({ step, title, description }, index) => (
              <li key={step} className="relative flex gap-6">
                {index < timeline.length - 1 && (
                  <div className="absolute top-8 left-[19px] h-full w-px bg-gradient-to-b from-blue-400/40 to-transparent" />
                )}

                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 text-xs font-medium text-blue-300/70 drop-shadow-[0_0_6px_rgba(96,165,250,0.2)]">
                  {step}
                </div>

                <div className="flex flex-col gap-1 pb-8">
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="text-sm text-white/50">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="flex flex-col items-center gap-5 text-center">
          <p className="text-white/60">모집 소식은 COMP 공식 인스타그램에서 확인해 주세요.</p>
          <a
            href="https://www.instagram.com/cau_comp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-blue-400/20 px-10 py-4 text-blue-200 hover:bg-blue-400/10"
          >
            <FiArrowUpRight className="text-xl" />
            모집 소식 확인하기
          </a>
        </div>
      </div>
    </section>
  )
}

export default ApplyPage
