import { useState } from "react";
import RoutesMain from "./pages/routes";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <UserProvider>
      <RoutesMain />
    </UserProvider>
  );
}

export default App;
