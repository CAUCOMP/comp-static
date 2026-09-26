import { FiUpload, FiUser, FiCalendar, FiClock, FiCheckCircle } from 'react-icons/fi'

const AttendanceForm = ({
    title,
    subTitle,
    file,
    onFileChange,
    fileText,
    onSubmit,
    buttonText,
}) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-50 gap-3 relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[200px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* todo: 사용자 정보 api 연결하기 */}
      <div className="text-center flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center mb-2 drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]">
          <FiUser className="text-blue-300 text-2xl" />
        </div>
        <p className="text-blue-300/60 text-sm tracking-widest uppercase">COMP 40기</p>
        <h1 className="text-4xl font-semibold">
          강지혜 님
        </h1>
        <div className="mt-1 px-4 py-1 border border-blue-400/30 rounded-full inline-flex items-center gap-2 text-blue-300/60 text-sm bg-blue-500/5">
          <FiCalendar />
          1주차 출석
        </div>
      </div>

      {/* 구분선 */}
      <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent" />

      <div className="text-center flex flex-col gap-3">
        <h2 className="text-2xl font-medium drop-shadow-[0_0_8px_rgba(147,197,253,0.3)]">
          {title}
        </h2>
        <p className="text-white/40 text-base flex items-center justify-center gap-2">
          <FiClock className="text-blue-300/40" />
          {subTitle}
        </p>
      </div>

      <label className="flex flex-col items-center justify-center w-[320px] h-[100px] border border-dashed border-blue-400/30 rounded-2xl cursor-pointer hover:border-blue-400/60 hover:bg-blue-500/5 hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.2)] transition-all gap-3">
        <FiUpload className="text-blue-300/50 text-2xl" />
        <span className="text-white/40 text-sm">
          {file ? (
            <span className="flex items-center gap-2 text-blue-300/70">
              <FiCheckCircle className="text-blue-400" />
              {file.name}
            </span>
          ) : fileText}
        </span>
        <input
          type="file"
          accept="*"
          className="hidden"
          onChange={onFileChange}
        />
      </label>

      {/* 출석 api 연결하기 */}
      <button 
        onClick={onSubmit}
        className="w-[200px] h-[50px] border border-blue-400/20 text-blue-200 font-semibold rounded-full hover:bg-blue-400/10 hover:border-blue-400/10 hover:drop-shadow-[0_0_20px_rgba(96,165,250,0.4)] transition-all flex items-center justify-center gap-2">
        <FiCheckCircle />
        {buttonText}
      </button>

    </section>
  )
}
export default AttendanceForm;