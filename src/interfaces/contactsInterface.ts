import { z } from "zod";
import {
  contactReturn,
  contactSchema,
  updateContactSchema,
} from "../schemas/contactSchema";

export interface iContactsContextProps {
  children: React.ReactNode;
}

export interface iContactsContext {
  contacts: tContactReponse[] | null | undefined;
  createContact: (dataItem: tContactRequest) => void;
}

export type tContactRequest = z.infer<typeof contactSchema>;
export type tContactReponse = z.infer<typeof contactReturn>;
export type tContactUpdate = z.infer<typeof updateContactSchema>;
