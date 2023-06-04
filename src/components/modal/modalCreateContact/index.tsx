import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../../forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { tContactRequest } from "../../../interfaces/contactsInterface";
import { contactSchema } from "../../../schemas/contactSchema";
import Input from "../../input";
import { ModalMain } from "./style";
import { useContext } from "react";
import { ContactsContext } from "../../../context/contactsContext";

export const ModalCreateContact = () => {
  const { createContact } = useContext(ContactsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<tContactRequest>({
    resolver: zodResolver(contactSchema),
  });

  const onHandleSubmit: SubmitHandler<tContactRequest> = (data) => {
    createContact(data);
    reset();
  };

  return (
    <ModalMain>
      <h1>Adicionar Contato</h1>
      <Form sub={handleSubmit(onHandleSubmit)}>
        <Input
          label={"Nome Completo"}
          type={"text"}
          placeholder={"Digite o Nome completo"}
          id={"fullName"}
          register={register("fullName")}
        />
        {errors.fullName ? <span>{errors.fullName.message}</span> : <></>}

        <Input
          label={"Email"}
          type={"email"}
          placeholder={"Digite o email"}
          id={"email"}
          register={register("email")}
        />
        {errors.email ? <span>{errors.email.message}</span> : <></>}

        <Input
          label={"Numero de Telefone"}
          type={"text"}
          placeholder={"Digite o numero"}
          id={"phoneNumber"}
          register={register("phoneNumber")}
        />
        {errors.phoneNumber ? <span>{errors.phoneNumber.message}</span> : <></>}

        <div>
          <button>Adicionar</button>
        </div>
      </Form>
    </ModalMain>
  );
};
