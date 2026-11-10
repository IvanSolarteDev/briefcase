import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import PortfolioLayout from "../components/layout/portfolioLayout";
import HomePage from "../features/home/HomePage";
import ProjectsPage from "../features/projects/ProjectsPage";
import ProfilePage from "../features/profile/ProfilePage";
import ExperiencePage from "../features/experience/ExperiencePage";
import SkillsPage from "../features/skills/SkillsPage";
import EducationPage from "../features/education/EducationPage";
import ContactPage from "../features/contact/ContactPage";
// import { HomePage } from '../features/home/HomePage'
// import { ProjectsPage } from '../features/projects/ProjectsPage'
// import { ProfilePage } from '../features/profile/ProfilePage'

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route index element={<HomePage />} />
          <Route path="experiencia" element={<ExperiencePage />} />
          <Route path="conocimientos" element={<SkillsPage />} />
          <Route path="estudios" element={<EducationPage />} />
          <Route path="proyectos" element={<ProjectsPage />} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="perfil" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
