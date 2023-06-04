import { iModalProps } from "../../interfaces/componentsInterface";
import { ModalCreateContact } from "./modalCreateContact";
import { ModalEditContact } from "./modalEditContact";
import { ModalEditUser } from "./modalEditUser";
import { MainDiv, ModalContainer, ModalMain } from "./style";

export const Modal = ({ setOff, style }: iModalProps) => {
  return (
    <ModalContainer>
      <MainDiv>
        <ModalMain>
          <div className="closeModal">
            <button onClick={() => setOff(false)}>X</button>
          </div>
          {style === "Create Contact" && <ModalCreateContact />}
          {style === "Edit Contact" && <ModalEditContact />}
          {style === "Edit User" && <ModalEditUser />}
        </ModalMain>
      </MainDiv>
    </ModalContainer>
  );
};
