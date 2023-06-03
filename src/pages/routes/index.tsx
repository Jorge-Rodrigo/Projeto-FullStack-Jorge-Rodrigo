import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../landingPage";
import { RegisterPage } from "../register";
import { LoginPage } from "../login";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<h1>Homepage</h1>} />
    </Routes>
  );
};

export default RoutesMain;
