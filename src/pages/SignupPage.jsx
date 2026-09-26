import bgLogo from '@/assets/logo/bgLogo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMail, FiLock, FiUser, FiArrowRight, FiShield } from 'react-icons/fi'

const SignupPage = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  const navigate = useNavigate()

  const handleVerify = () => {}
  const handleSubmit = () => {}

  return (
    <section className="min-h-screen flex flex-col items-center gap-10 relative overflow-hidden justify-center">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 로고 */}
      <img
        src={bgLogo}
        alt="배경 로고"
        onClick={() => navigate('/')}
        className="w-60 pt-10 object-contain cursor-pointer"
      />

      <div className="text-center flex flex-col gap-1">
        <h1 className="text-3xl font-semibold">회원가입</h1>
        <p className="text-white/40 text-sm">COMP 멤버로 등록된 사용자만 가입할 수 있습니다.</p>
      </div>

      <form className="flex flex-col gap-4 w-100">

        <div className="flex gap-2">
          <div className="relative flex-1">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/40" />
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 rounded-2xl border border-blue-400/20 px-10 outline-none text-[16px] placeholder:text-white/30"
            />
          </div>
          <button
            type="button"
            onClick={handleVerify}
            className="h-12 px-4 border border-blue-400/20 text-blue-200 rounded-2xl hover:bg-blue-400/20 cursor-pointer flex-shrink-0 text-[16px]"
          >
            인증확인
          </button>
        </div>

        <div className="relative">
          <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/40" />
          <input
            type="text"
            placeholder="실명을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-12 rounded-2xl border border-blue-400/20 px-10 outline-none text-[16px] placeholder:text-white/30"
          />
        </div>

        <div className="relative">
          <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/40" />
          <input
            type="password"
            placeholder="영문/숫자 포함 8자리 이상"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 rounded-2xl border border-blue-400/20 px-10 outline-none text-[16px] placeholder:text-white/30"
          />
        </div>

        <div className="relative">
          <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/40" />
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className="w-full h-12 rounded-2xl border border-blue-400/20 px-10 outline-none text-[16px] placeholder:text-white/30"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full h-12 border border-blue-400/20 text-blue-200 rounded-2xl hover:bg-blue-400/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
        >
          회원가입
          <FiArrowRight />
        </button>

      </form>

      {/* 로그인 이동 */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-white/40">이미 계정이 있으신가요?</span>
        <span
          onClick={() => navigate('/login')}
          className="text-[20px] text-blue-300/70 hover:text-blue-300 cursor-pointer"
        >
          로그인
        </span>
      </div>

    </section>
  )
}

export default SignupPage