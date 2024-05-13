import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "../pages/Landingpage";

const AppRouter = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="dashboard" element={<About />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRouter;
