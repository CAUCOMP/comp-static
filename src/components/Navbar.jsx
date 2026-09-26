import { useState } from "react";
import {Link} from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi"

const NavLink = ({ to, children, onClick }) => (
  <Link to={to} onClick={onClick} className="no-underline opacity-85 hover:opacity-100">
    {children}
  </Link>
)

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => {
    setMobileOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-[#000925] p-7 flex items-center justify-between text-[18px]">
      <div className="flex flex-row items-center gap-6">
        <div className="text-3xl" aria-hidden="true" >
          <NavLink to="/">&lt;OM/&gt;</NavLink>
        </div>
        <nav className="gap-6 hidden md:flex" aria-label="Top navigation">
          <NavLink to="/archive/gallery">갤러리</NavLink>
          <NavLink to="/archive/ob">OB</NavLink>
          <NavLink to="/projects">프로젝트</NavLink>
          <NavLink to="/apply">지원하기</NavLink>
        </nav>
      </div>
      <button
        className="md:hidden cursor-pointer"
        aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(prev => !prev)}
      >
        {mobileOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
      </button>

      {mobileOpen &&(
        <nav aria-label="Mobile navigation" className="md:hidden absolute top-full left-0 w-full flex flex-col px-7 py-6 gap-6 text-[18px] bg-[#000925] border-t border-blue-400/2">
          <NavLink to="/archive/gallery" onClick={closeMobile}>갤러리</NavLink>
          <NavLink to="/archive/ob" onClick={closeMobile}>OB</NavLink>
          <NavLink to="/projects" onClick={closeMobile}>프로젝트</NavLink>
          <NavLink to="/apply" onClick={closeMobile}>지원하기</NavLink>
        </nav>
      )}
    </header>
  );
}
