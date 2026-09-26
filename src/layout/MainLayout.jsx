import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation()
  const isLanding = location.pathname === '/'

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