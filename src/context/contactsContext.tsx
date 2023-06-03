import { createContext, useEffect, useState } from "react";
import {
  iContactsContext,
  iContactsContextProps,
  tContactReponse,
  tContactRequest,
} from "../interfaces/contactsInterface";
import { notifyError, notifySucess } from "../services/toastfy";
import { api } from "../services/api";

export const ContactsContext = createContext({} as iContactsContext);

export const ContactsProvider = ({ children }: iContactsContextProps) => {
  const [contacts, setContacts] = useState<tContactReponse[] | null>();

  useEffect(() => {
    async function getContacts() {
      const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`);
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.get<tContactReponse[]>("contacts");
        setContacts(data);
      } catch (err: any) {
        notifyError(err.response.data);
      }
    }
    getContacts();
  }, [setContacts]);

  async function createContact(dataItem: tContactRequest) {
    try {
      await api.post<tContactReponse>("contacts", dataItem);

      notifySucess("Novo contato Adicionado!");
    } catch (err: any) {
      notifyError(err.response.data.message);
    }
  }
  return (
    <ContactsContext.Provider value={{ contacts }}>
      {children}
    </ContactsContext.Provider>
  );
};
