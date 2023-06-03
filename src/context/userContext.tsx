import { createContext, useEffect, useState } from "react";
import {
  iUserContext,
  iUserContextProps,
  iUserFormRequest,
  tUserReponse,
} from "../interfaces/userInterfaces";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySucess } from "../services/toastfy";
import { tUserLogin } from "../interfaces/userInterfaces";
import { iUserToken } from "../interfaces/userInterfaces";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<tUserReponse | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`);
      if (!token || token === "") {
        return;
      }
      try {
        if (token !== "") {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await api.get<tUserReponse>(`/users`);
          setUser(data);
        }
      } catch (err) {
        localStorage.clear();
      }
    }

    getUser();
  }, [user]);

  async function login(dataItem: tUserLogin) {
    try {
      const { data } = await api.post<iUserToken>("login", dataItem);
      localStorage.setItem("@TOKEN", JSON.stringify(data.token || null));
      navigate("/home");
      notifySucess("Login feito com Sucesso!");
    } catch (err: any) {
      notifyError(err.response.data.message);
    }
  }

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
    <UserContext.Provider value={{ user, register, login }}>
      {children}
    </UserContext.Provider>
  );
};
