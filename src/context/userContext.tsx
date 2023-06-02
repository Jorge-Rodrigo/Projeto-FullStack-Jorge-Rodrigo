import { createContext, useState } from "react";
import {
  iUserContext,
  iUserContextProps,
  iUserFormRequest,
  tUserReponse,
} from "../interfaces/userInterfaces";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySucess } from "../services/toastfy";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<tUserReponse | null>(null);
  const navigate = useNavigate();

  async function register(dataItem: iUserFormRequest) {
    try {
      await api.post<tUserReponse>("users", dataItem);

      setUser(null);
      navigate("/");
      notifySucess("Conta Criada!");
    } catch (err: any) {
      notifyError(err.response.data.message);
    }
  }

  return (
    <UserContext.Provider value={{ user, register }}>
      {children}
    </UserContext.Provider>
  );
};
