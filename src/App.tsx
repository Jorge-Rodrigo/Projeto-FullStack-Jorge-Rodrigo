import RoutesMain from "./pages/routes";
import { UserProvider } from "./context/userContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <UserProvider>
      <RoutesMain />
      <ToastContainer />
    </UserProvider>
  );
}

export default App;
