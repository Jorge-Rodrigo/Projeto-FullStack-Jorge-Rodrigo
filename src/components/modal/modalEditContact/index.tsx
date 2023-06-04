import { ModalEditProps } from "../../../interfaces/componentsInterface";
import Input from "../../input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tContactUpdate } from "../../../interfaces/contactsInterface";
import { updateContactSchema } from "../../../schemas/contactSchema";
import Form from "../../forms";
import { ModalMain } from "./style";

export const ModalEditContact = ({ contact }: ModalEditProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<tContactUpdate>({
    resolver: zodResolver(updateContactSchema),
  });

  const onHandleSubmit: SubmitHandler<tContactUpdate> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <ModalMain>
      <h1>{contact?.fullName}</h1>
      <Form sub={handleSubmit(onHandleSubmit)}>
        {" "}
        <Input
          label={"Nome Completo"}
          type={"text"}
          placeholder={"Digite o Nome completo"}
          id={"fullName"}
          value={contact?.fullName}
          register={register("fullName")}
        />
        {errors.fullName ? <span>{errors.fullName.message}</span> : <></>}
        <Input
          label={"Email"}
          type={"email"}
          placeholder={"Digite o email"}
          id={"email"}
          value={contact?.email}
          register={register("email")}
        />
        {errors.email ? <span>{errors.email.message}</span> : <></>}
        <Input
          label={"Numero de Telefone"}
          type={"text"}
          placeholder={"Digite o numero"}
          id={"phoneNumber"}
          value={contact?.phoneNumber}
          register={register("phoneNumber")}
        />
        {errors.phoneNumber ? <span>{errors.phoneNumber.message}</span> : <></>}
        <div>
          <button>Salvar Alterações</button>
          <button>Excluir Contato</button>
        </div>
      </Form>
    </ModalMain>
  );
};
