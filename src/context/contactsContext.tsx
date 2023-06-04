import { createContext, useContext, useEffect, useState } from "react";
import {
  iContactsContext,
  iContactsContextProps,
  tContactReponse,
  tContactRequest,
  tContactUpdate,
} from "../interfaces/contactsInterface";
import { notifyError, notifySucess } from "../services/toastfy";
import { api } from "../services/api";
import { tUserReponse } from "../interfaces/userInterfaces";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./userContext";

export const ContactsContext = createContext({} as iContactsContext);

export const ContactsProvider = ({ children }: iContactsContextProps) => {
  const { setUser } = useContext(UserContext);
  const [contacts, setContacts] = useState<tContactReponse[] | null>();
  const [modalOn, setModalOn] = useState(false);
  const navigate = useNavigate();
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
      const { data } = await api.get<tContactReponse[]>("contacts");
      setContacts(data);
      setModalOn(false);
      notifySucess("Novo contato Adicionado!");
    } catch (err: any) {
      notifyError(err.response.data.message);
    }
  }
  async function editUser(dataItem: tContactUpdate) {
    const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await api.patch<tUserReponse>("users", dataItem);
      setUser(data);
      setModalOn(false);
      notifySucess("Usuario editado com sucesso!");
    } catch (err: any) {
      notifyError(err.response.data.message);
    }
  }
  async function deleteUser() {
    const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api.delete<tUserReponse>("users");
      navigate("/");
      notifySucess("Usuario deletado com sucesso!");
      window.location.reload();
    } catch (err: any) {
      notifyError(err.response.data.message);
    }
  }
  async function editContact(
    dataItem: tContactUpdate,
    contactId: number | undefined
  ) {
    const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api.patch<tContactReponse>(`contacts/${contactId}`, dataItem);
      const { data } = await api.get<tContactReponse[]>("contacts");
      setContacts(data);
      notifySucess("Contato editado com sucesso!");
      setModalOn(false);
    } catch (err: any) {
      notifyError(err.response.data.message);
    }
  }
  async function deleteContact(contactId: number | undefined) {
    const token = JSON.parse(`${localStorage.getItem("@TOKEN")}`);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api.delete<tContactReponse>(`contacts/${contactId}`);
      const { data } = await api.get<tContactReponse[]>("contacts");
      setContacts(data);
      notifySucess("Contato deletado com sucesso!");
      setModalOn(false);
    } catch (err: any) {
      notifyError(err.response.data.message);
    }
  }

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        navigate,
        createContact,
        editUser,
        deleteUser,
        editContact,
        deleteContact,
        modalOn,
        setModalOn,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
