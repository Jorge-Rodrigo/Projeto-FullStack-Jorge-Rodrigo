import { UseFormRegisterReturn } from "react-hook-form";

export interface iInputProps {
  label?: string;
  type: string;
  placeholder: string;
  id: string;
  register: UseFormRegisterReturn<string>;
  disable?: boolean;
}

export interface iFormProps {
  children: React.ReactNode;
  sub: (data: any) => void;
}

export interface iModalProps {
  setOff: React.Dispatch<React.SetStateAction<boolean>>;
  style: string;
}
