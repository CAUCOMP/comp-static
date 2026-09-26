import { FiUser, FiCalendar, FiCheckCircle, FiXCircle } from 'react-icons/fi'

const AttendanceStatusPage = () => {

  // todo: api 연결
  const weeklyData = [
    { week: 1, attendance: true,  submit: true  },
    { week: 2, attendance: true,  submit: false },
    { week: 3, attendance: false, submit: false },
    { week: 4, attendance: true,  submit: true  },
    { week: 5, attendance: true,  submit: true  },
    { week: 6, attendance: true,  submit: true  },
    { week: 7, attendance: null,  submit: null  },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-50 gap-3 relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center mb-2 drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]">
          <FiUser className="text-blue-300 text-2xl" />
        </div>
        <p className="text-blue-300/60 text-sm tracking-widest uppercase">COMP 40기</p>
        <h1 className="text-4xl font-semibold">강지혜 님</h1>
        <div className="mt-1 px-4 py-1 border border-blue-400/30 rounded-full inline-flex items-center gap-2 text-blue-300/60 text-sm bg-blue-500/5">
          <FiCalendar />
          개인별 출석 현황
        </div>
      </div>

      <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent" />

      <div className="flex flex-col gap-3 w-full max-w-[500px]">
        
        <div className="grid grid-cols-3 text-center text-blue-300/50 text-sm px-6 pb-2">
          <span>주차</span>
          <span>출석</span>
          <span>과제 제출</span>
        </div>

        {weeklyData.map(({ week, attendance, submit }) => (
          <div
            key={week}
            className="grid grid-cols-3 items-center text-center px-6 py-4 rounded-2xl border border-blue-400/20 bg-blue-500/5"
          >
            <span className="text-blue-300/70 text-sm font-medium">{week}주차</span>

            <div className="flex justify-center">
              {attendance === null ? (
                <span className="text-white/20 text-sm">-</span>
              ) : attendance ? (
                <FiCheckCircle className="text-blue-400 text-xl drop-shadow-[0_0_6px_rgba(96,165,250,0.6)]" />
              ) : (
                <FiXCircle className="text-red-400/70 text-xl" />
              )}
            </div>

            <div className="flex justify-center">
              {submit === null ? (
                <span className="text-white/20 text-sm">-</span>
              ) : submit ? (
                <FiCheckCircle className="text-blue-400 text-xl drop-shadow-[0_0_6px_rgba(96,165,250,0.6)]" />
              ) : (
                <FiXCircle className="text-red-400/70 text-xl" />
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default AttendanceStatusPage
