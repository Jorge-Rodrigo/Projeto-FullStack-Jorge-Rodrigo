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
  const [loadingPage, setLoadingPage] = useState(true);
  const navigate = useNavigate();

  const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`);
  useEffect(() => {
    async function getUser() {
      if (!token || token === "") {
        setLoadingPage(false);
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
      } finally {
        setLoadingPage(false);
      }
    }

    getUser();
  }, [token]);

  async function login(dataItem: tUserLogin) {
    try {
      const { data } = await api.post<iUserToken>("login", dataItem);
      notifySucess("Login feito com Sucesso!");
      if (data) {
        localStorage.setItem("@TOKEN", JSON.stringify(data.token || null));
        navigate("/home");
      }
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
    <UserContext.Provider
      value={{ user, register, login, navigate, loadingPage, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
