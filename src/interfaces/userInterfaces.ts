import { z } from "zod";
import { userReturn, userSchema } from "../schemas/userSchemas";

export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserContext {
  user: tUserReponse | null;
  register: (dataItem: iUserFormRequest) => void;
}

export interface iUserFormRequest {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export type tUserRequest = z.infer<typeof userSchema>;
export type tUserReponse = z.infer<typeof userReturn>;
