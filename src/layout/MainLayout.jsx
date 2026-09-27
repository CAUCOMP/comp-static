import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"
import { useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation()
  const isLanding = location.pathname === '/'
  const previousPathname = useRef(location.pathname)

  useLayoutEffect(() => {
    if (previousPathname.current !== location.pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      previousPathname.current = location.pathname
    }
  }, [location.pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-5">
        <Outlet />
      </main>
      {!isLanding && <Footer />}
    </div>
  )
}

export default MainLayout
