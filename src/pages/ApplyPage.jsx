import { FiCalendar, FiClock, FiUsers, FiArrowUpRight } from 'react-icons/fi'

const ApplyPage = () => {

  const timeline = [
    { step: "01", title: "서류 접수", date: "2026.01.26 - 03.02", description: "지원서 작성 및 제출" },
    { step: "02", title: "서류 발표", date: "2026.03.04 18시 이후", description: "합격자 개별 연락" },
    { step: "03", title: "면접", date: "2026.03.07 - 03.08", description: "대면 면접 진행" },
    { step: "04", title: "최종 발표", date: "2026.03.09 18시 이후", description: "최종 합격자 발표" },
  ]

  const conditions = [
    "중앙대학교 서울캠퍼스 1, 2학년 재학생",
    "전공 무관, 초보자 환영",
    "1년 활동 가능자 (25년 1학기, 2학기)",
]

  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-32 gap-12 p-20 relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="text-center flex flex-col items-center gap-2">
        <p className="text-blue-300/60 text-sm tracking-widest uppercase">Recruit</p>
        <h1 className="text-4xl font-semibold drop-shadow-[0_0_8px_rgba(147,197,253,0.3)]">
          COMP 40기 모집
        </h1>
        <div className="mt-1 px-4 py-1 border border-blue-400/30 rounded-full inline-flex items-center gap-2 text-blue-300/60 text-sm bg-blue-500/5">
          <FiCalendar />
          2026.01.26 - 03.02
        </div>
      </div>

      <div className="w-full max-w-[700px] flex flex-col gap-10 relative">

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center drop-shadow-[0_0_6px_rgba(96,165,250,0.3)]">
              <FiUsers className="text-blue-300 text-sm" />
            </div>
            <h2 className="text-xl font-medium">지원 자격</h2>
          </div>

          <div className="flex flex-col gap-2 pl-11">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-center gap-3 text-white/60 text-[16px]">
                <div className="w-1 h-1 rounded-full bg-blue-400/60 flex-shrink-0" />
                {condition}
              </div>
            ))}
          </div>
        </div>

        {/* 구분선 */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        {/* 전형 일정 타임라인 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center drop-shadow-[0_0_6px_rgba(96,165,250,0.3)]">
              <FiClock className="text-blue-300 text-sm" />
            </div>
            <h2 className="text-xl font-medium">전형 일정</h2>
          </div>

          <div className="flex flex-col pl-11">
            {timeline.map(({ step, title, date, description }, index) => (
              <div key={index} className="flex gap-6 relative">

                {index < timeline.length - 1 && (
                  <div className="absolute left-[19px] top-8 w-[1px] h-full bg-gradient-to-b from-blue-400/40 to-transparent" />
                )}

                <div className="w-10 h-10 rounded-full border border-blue-400/40 bg-blue-500/10 flex items-center justify-center text-blue-300/70 text-xs font-medium flex-shrink-0 drop-shadow-[0_0_6px_rgba(96,165,250,0.2)]">
                  {step}
                </div>

                <div className="flex flex-col gap-1 pb-8">
                  <h3 className="font-medium text-[18px]">{title}</h3>
                  <p className="text-blue-300/60 text-sm">{date}</p>
                  <p className="text-white/40 text-sm">{description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 구분선 */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="flex justify-center">
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-10 py-4 border-1 border-blue-400/20 text-blue-200 rounded-full hover:bg-blue-400/10 cursor-pointer"
          >
            <FiArrowUpRight className="text-xl" />
            지원하기
          </a>
        </div>

      </div>
    </section>
  )
}

export default ApplyPage
