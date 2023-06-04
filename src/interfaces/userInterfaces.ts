import { z } from "zod";
import { userLogin, userReturn, userSchema } from "../schemas/userSchemas";
import { NavigateFunction } from "react-router-dom";

export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserContext {
  user: tUserReponse | null;
  register: (dataItem: iUserFormRequest) => void;
  login: (dataItem: tUserLogin) => void;
  navigate: NavigateFunction;
  loadingPage: boolean;
  setUser: React.Dispatch<
    React.SetStateAction<{
      id: number;
      fullName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      phoneNumber: string;
      deletedAt: string | null;
    } | null>
  >;
}

export interface iUserFormRequest {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface iUserToken {
  token: string;
}

export type tUserLogin = z.infer<typeof userLogin>;
export type tUserRequest = z.infer<typeof userSchema>;
export type tUserReponse = z.infer<typeof userReturn>;
