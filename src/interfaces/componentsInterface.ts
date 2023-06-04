import { UseFormRegisterReturn } from "react-hook-form";
import { tContactReponse } from "./contactsInterface";
import { tUserReponse } from "./userInterfaces";

export interface iInputProps {
  label?: string;
  type: string;
  placeholder: string;
  id: string;
  register: UseFormRegisterReturn<string>;
  disable?: boolean;
  value?: string;
}

export interface iFormProps {
  children: React.ReactNode;
  sub: (data: any) => void;
}

export interface iModalProps {
  setOff: React.Dispatch<React.SetStateAction<boolean>>;
  style: string;
  infoModal?: tContactReponse | tUserReponse | null;
}

export interface ModalEditProps {
  contact?: tContactReponse | tUserReponse | null;
}

export interface ModalEditUserProps {
  user?: tContactReponse | tUserReponse | null;
}
