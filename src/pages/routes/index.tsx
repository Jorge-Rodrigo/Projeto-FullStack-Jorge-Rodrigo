import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../landingPage";
import { RegisterPage } from "../register";
import { LoginPage } from "../login";
import { HomePage } from "../home";
import ProtectedRoutes from "../../components/protectedRoutes";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
