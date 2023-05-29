import { createContext, useState } from "react";
import { iUserContext, iUserContextProps } from "../interfaces/userInterfaces";

export const UserContect = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState("a");
  return (
    <UserContect.Provider value={{ user }}>{children}</UserContect.Provider>
  );
};
