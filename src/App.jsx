import { Navigate, Routes, Route } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import LandingPage from "@/pages/landing/LandingPage";
import ApplyPage from "./pages/ApplyPage";
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
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
