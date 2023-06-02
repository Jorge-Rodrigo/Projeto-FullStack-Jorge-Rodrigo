import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../landingPage";
import { RegisterPage } from "../register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/home" element={<h1>Homepage</h1>} />
    </Routes>
  );
};

export default RoutesMain;
