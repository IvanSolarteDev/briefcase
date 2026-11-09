import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import PortfolioLayout from "../components/layout/portfolioLayout";
import HomePage from "../features/home/HomePage";
import ProjectsPage from "../features/projects/ProjectsPage";
import ProfilePage from "../features/profile/ProfilePage";
// import { HomePage } from '../features/home/HomePage'
// import { ProjectsPage } from '../features/projects/ProjectsPage'
// import { ProfilePage } from '../features/profile/ProfilePage'

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route index element={<HomePage />} />
          <Route path="proyectos" element={<ProjectsPage />} />
          <Route path="perfil" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
