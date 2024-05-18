import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "../pages/Landingpage";
import ROUTES from "../utils/routes";
import LoginPage from "../pages/Login";
import DashboardLayout from "../layout/Dashboard";
import StatisticalPage from "../pages/Dashboard/Statistical";
import ManagerJobsPage from "../pages/Dashboard/ManagerJobs";
import ManagerAccountPage from "../pages/Dashboard/ManagerAccount";
import PostPage from "../pages/Dashboard/Post";
import NotFoundDashboard from "../pages/Dashboard/NotFound";
import PolicyPage from "../pages/Dashboard/UserManual/Policy";
import CreateJobPage from "../pages/Dashboard/ManagerJobs/Create";
import CreatePostPage from "../pages/Dashboard/Post/Create";
import ManagerProxyPage from "../pages/Dashboard/ManagerProxy";
import CreateProxy from "../pages/Dashboard/ManagerProxy/Create";
import RegisterPage from "../pages/Dashboard/Registrer";
import RegisterOtp from "../pages/Dashboard/Registrer/Otp";

const AppRouter = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path={ROUTES.HOME} element={<LandingPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.REGISTER_OTP} element={<RegisterOtp />} />
      <Route
        path={ROUTES.DASHBOARD.ROOT}
        element={<DashboardLayout />}
        errorElement={<NotFoundDashboard />}
      >
        <Route index element={<StatisticalPage />} />
        <Route
          path={ROUTES.DASHBOARD.MANAGER_JOBS.ROOT}
          element={<ManagerJobsPage />}
        />
        <Route
          path={`${ROUTES.DASHBOARD.MANAGER_JOBS.ROOT}/${ROUTES.DASHBOARD.MANAGER_JOBS.CREATE}`}
          element={<CreateJobPage />}
        />

        <Route
          path={ROUTES.DASHBOARD.MANAGER_ACCOUNT}
          element={<ManagerAccountPage />}
        />
        <Route path={ROUTES.DASHBOARD.POST.ROOT} element={<PostPage />} />
        <Route
          path={`${ROUTES.DASHBOARD.POST.ROOT}/${ROUTES.DASHBOARD.POST.CREATE}`}
          element={<CreatePostPage />}
        />
        <Route
          path={`${ROUTES.DASHBOARD.USER_MANUAL.ROOT}/${ROUTES.DASHBOARD.USER_MANUAL.POLICY}`}
          element={<PolicyPage />}
        />
        <Route
          path={`${ROUTES.DASHBOARD.USER_MANUAL.ROOT}/${ROUTES.DASHBOARD.USER_MANUAL.USAGE}`}
          element={<PolicyPage />}
        />
        <Route
          path={ROUTES.DASHBOARD.MANAGER_PROXY.ROOT}
          element={<ManagerProxyPage />}
        />
        <Route
          path={`${ROUTES.DASHBOARD.MANAGER_PROXY.ROOT}/${ROUTES.DASHBOARD.MANAGER_PROXY.CREATE}`}
          element={<CreateProxy />}
        />

        <Route path="*" element={<NotFoundDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
