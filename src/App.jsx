import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import LandingPage from "@/pages/landing/LandingPage";
import LoginPage from "@/pages/LoginPage";
import AttendanceLayout from "@/layout/AttendanceLayout";
import AttendancePage from "@/pages/attendance/AttendancePage";
import StudySubmitPage from "@/pages/attendance/StudySubmitPage";
import AttendanceStatusPage from "@/pages/attendance/AttendanceStatusPage";
import ApplyPage from "./pages/ApplyPage";
import SignupPage from "./pages/SignupPage";
import GalleryPage from "./pages/archive/GalleryPage";
import ProjectPage from "./pages/ProjectPage";
import OBPage from "./pages/archive/OBPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/archive/gallery" element={<GalleryPage />} />
        <Route path="/archive/ob" element={<OBPage />} />
        <Route path="/projects" element={<ProjectPage />} />

        <Route element={<AttendanceLayout />}>
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/attendance/submit" element={<StudySubmitPage />} />
          <Route path="/attendance/status" element={<AttendanceStatusPage />} />
        </Route>

        
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />


    </Routes>
  );
}

export default App;