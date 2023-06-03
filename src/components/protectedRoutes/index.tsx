import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { ContactsProvider } from "../../context/contactsContext";

const ProtectedRoutes = () => {
  const { loadingPage } = useContext(UserContext);
  const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`);

  if (loadingPage) {
    return null;
  }

  return (
    <>
      {token ? (
        <ContactsProvider>
          <Outlet />
        </ContactsProvider>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default ProtectedRoutes;
