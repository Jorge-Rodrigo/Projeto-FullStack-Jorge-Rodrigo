import { z } from "zod";
import {
  contactReturn,
  contactSchema,
  updateContactSchema,
} from "../schemas/contactSchema";
import { NavigateFunction } from "react-router-dom";

export interface iContactsContextProps {
  children: React.ReactNode;
}

export interface iContactsContext {
  contacts: tContactReponse[] | null | undefined;
  navigate: NavigateFunction;
  createContact: (dataItem: tContactRequest) => void;
  editUser: (dataItem: tContactUpdate) => void;
  deleteUser: () => void;
  editContact: (
    dataItem: tContactUpdate,
    contactId: number | undefined
  ) => void;
  deleteContact: (contactId: number | undefined) => void;
  modalOn: boolean;
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export type tContactRequest = z.infer<typeof contactSchema>;
export type tContactReponse = z.infer<typeof contactReturn>;
export type tContactUpdate = z.infer<typeof updateContactSchema>;
