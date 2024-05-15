import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "../pages/Landingpage";
import ROUTES from "../utils/routes";
import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";

const AppRouter = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path={ROUTES.HOME} element={<LandingPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} ></Route>
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRouter;
