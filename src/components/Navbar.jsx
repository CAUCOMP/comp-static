import { useState } from "react";
import { Link } from "react-router-dom"
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
    <header className="fixed top-0 left-0 z-10 flex w-full items-center justify-between bg-[#000925] px-7 py-6 text-[18px] md:px-10 lg:px-16">
      <Link to="/" className="text-3xl no-underline" aria-label="COMP 홈" onClick={closeMobile}>
        &lt;OM/&gt;
      </Link>
      <nav className="hidden items-center gap-6 md:flex lg:gap-9" aria-label="Top navigation">
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/archive/gallery">갤러리</NavLink>
        <NavLink to="/archive/ob">OB</NavLink>
        <NavLink to="/projects">프로젝트</NavLink>
        <NavLink to="/apply">지원하기</NavLink>
      </nav>
      <button
        className="md:hidden cursor-pointer"
        aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(prev => !prev)}
      >
        {mobileOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
      </button>

      {mobileOpen &&(
        <nav aria-label="Mobile navigation" className="absolute top-full left-0 flex w-full flex-col gap-6 border-t border-blue-400/20 bg-[#000925] px-7 py-6 text-[18px] md:hidden">
          <NavLink to="/about" onClick={closeMobile}>About Us</NavLink>
          <NavLink to="/archive/gallery" onClick={closeMobile}>갤러리</NavLink>
          <NavLink to="/archive/ob" onClick={closeMobile}>OB</NavLink>
          <NavLink to="/projects" onClick={closeMobile}>프로젝트</NavLink>
          <NavLink to="/apply" onClick={closeMobile}>지원하기</NavLink>
        </nav>
      )}
    </header>
  );
}
