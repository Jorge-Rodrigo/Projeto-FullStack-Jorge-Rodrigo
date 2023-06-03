import { createContext } from "react";
import {
  iContactsContext,
  iContactsContextProps,
} from "../interfaces/contactsInterface";

export const ContactsContext = createContext({} as iContactsContext);

export const ContactsProvider = ({ children }: iContactsContextProps) => {
  const a = "a";

  return (
    <ContactsContext.Provider value={{ a }}>
      {children}
    </ContactsContext.Provider>
  );
};
