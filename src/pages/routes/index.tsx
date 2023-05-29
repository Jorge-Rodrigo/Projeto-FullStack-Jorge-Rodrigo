import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../landingPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<h1>Register</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/home" element={<h1>Homepage</h1>} />
    </Routes>
  );
};

export default RoutesMain;
