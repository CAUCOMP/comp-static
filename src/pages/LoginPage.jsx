import bgLogo from '@/assets/logo/bgLogo.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi'
import { login } from '@/apis/auth'; 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

const handleSubmit = async () => {
  setError("");
  try {
    await login(email, password);
    console.log("login 성공");
    navigate('/');
  } catch (err) {
    console.log("오류가 발생했습니다:", err);  
    setError("이메일 또는 비밀번호가 올바르지 않습니다.");
  }
}

  const handleHome = () => {
    navigate('/')
  }

  return (
    <section className="min-h-screen flex flex-col items-center gap-10 relative overflow-hidden justify-center">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
 
      <img 
        src={bgLogo} 
        alt="배경 로고"
        onClick={handleHome}
        className="w-80 pt-10 object-contain cursor-pointer"
      />
      <div className="text-center flex flex-col gap-1">
        <h1 className="text-3xl font-semibold">로그인</h1>
        <p className="text-white/40 text-sm">잠깐, COMP 회원이신가요? 회원만 로그인할 수 있어요</p>
      </div>

    <form className="flex flex-col gap-4 w-100">
        <div className="relative">
          <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/40" />
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 rounded-2xl border border-blue-400/20 px-10 outline-none text-[16px] placeholder:text-white/30"
          />
        </div>

          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/40" />
            <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 rounded-2xl border border-blue-400/20 px-10 outline-none text-[16px] placeholder:text-white/30"
                autoComplete="current-password"
            />
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        <button 
            type="button"
            className="w-full h-12 border border-blue-400/20 text-blue-200 rounded-2xl hover:bg-blue-400/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
            onClick={handleSubmit}>
            로그인하기
            <FiArrowRight />
        </button>

    </form>


      <div className="flex flex-col items-center gap-1">
        <span className="text-white/40">계정이 없으신가요?</span>
        <span
          onClick={() => navigate('/signup')}
          className="text-[20px] text-blue-300/70 hover:text-blue-300 cursor-pointer"
        >
          회원가입
        </span>
      </div>

    </section>
  )
}

export default LoginPage