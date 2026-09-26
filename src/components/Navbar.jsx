import { useState } from "react";
import {Link} from "react-router-dom"
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi"

const NavLink = ({ to, children }) => (
  <Link to={to} className="no-underline opacity-85 hover:opacity-100">
    {children}
  </Link>
)

export default function Navbar() {
  const [archiveOpen, setArchiveOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => {
    setMobileOpen(false)
    setArchiveOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-[#000925] p-7 flex items-center justify-between text-[18px]">
      <div className="flex flex-row items-center gap-6">
        <div className="text-3xl" aria-hidden="true" >
          <NavLink to="/">&lt;OM/&gt;</NavLink>
        </div>
        <nav className="gap-6 hidden md:flex" aria-label="Top navigation">
          <div className="relative">
            <button
              className="flex items-center gap-1 opacity-85 hover:opacity-100 cursor-pointer"
              onClick={() => setArchiveOpen(prev => !prev)}
            >
              아카이브
            </button>

            {archiveOpen && (
              <div className="absolute top-full -left-7 mt-3 flex flex-col bg-[#000925] border border-blue-400/20 rounded-xl overflow-hidden min-w-[120px] items-center">
                <Link
                  to="/archive/gallery"
                  onClick={() => setArchiveOpen(false)}
                  className="px-5 py-3 text-white/60 hover:text-white no-underline"
                >
                  갤러리
                </Link>
                <Link
                  to="/archive/ob"
                  onClick={() => setArchiveOpen(false)}
                  className="px-5 py-3 text-white/60 hover:text-white no-underline"
                >
                  OB
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/projects">프로젝트</NavLink>
          <NavLink to="/apply">지원하기</NavLink>
        </nav>
      </div>
      <div className="md:block hidden">
        <NavLink to="/login">로그인</NavLink>
      </div>

      <button
        className="md:hidden cursor-pointer"
        onClick={() => setMobileOpen(prev => !prev)}
      >
        {mobileOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
      </button>

      {mobileOpen &&(
        <div className="md:hidden absolute top-full left-0 w-full flex flex-col px-7 py-6 gap-6 text-[18px] bg-[#000925] border-t border-blue-400/2">
          <button
            className="flex items-center justify-between opacity-85 cursor-pointer"
            onClick={() => setArchiveOpen(prev => !prev)}
          >
            아카이브
            <FiChevronDown className={`transition-transform duration-300 ${archiveOpen ? 'rotate-180' : ''}`} />
          </button>

          {archiveOpen && (
            <div className="flex flex-col gap-4 pl-4 border-l border-blue-400/20">
              <Link to="/archive/gallery" onClick={closeMobile} className="text-white/60 hover:text-white no-underline">갤러리</Link>
              <Link to="/archive/ob" onClick={closeMobile} className="text-white/60 hover:text-white no-underline">OB</Link>
            </div>
          )}

          <NavLink to="/projects" onClick={closeMobile}>프로젝트</NavLink>
          <NavLink to="/apply" onClick={closeMobile}>지원하기</NavLink>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

          <NavLink to="/login" onClick={closeMobile}>로그인</NavLink>

        </div>
      )}
    </header>
  );
}