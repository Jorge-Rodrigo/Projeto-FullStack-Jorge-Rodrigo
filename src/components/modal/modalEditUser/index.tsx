import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalEditUserProps } from "../../../interfaces/componentsInterface";
import { tContactUpdate } from "../../../interfaces/contactsInterface";
import { updateContactSchema } from "../../../schemas/contactSchema";
import Form from "../../forms";
import Input from "../../input";
import { useState } from "react";
import { ModalMain } from "./style";

export const ModalEditUser = ({ user }: ModalEditUserProps) => {
  const [editMode, setEditMode] = useState(false);

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
    setEditMode(false);
  };
  return (
    <ModalMain>
      <h1>{user?.fullName}</h1>
      {editMode && (
        <Form sub={handleSubmit(onHandleSubmit)}>
          {" "}
          <Input
            label={"Nome Completo"}
            type={"text"}
            placeholder={"Digite o Nome completo"}
            id={"fullName"}
            value={user?.fullName}
            register={register("fullName")}
          />
          {errors.fullName ? <span>{errors.fullName.message}</span> : <></>}
          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Digite o email"}
            id={"email"}
            value={user?.email}
            register={register("email")}
          />
          {errors.email ? <span>{errors.email.message}</span> : <></>}
          <Input
            label={"Numero de Telefone"}
            type={"text"}
            placeholder={"Digite o numero"}
            id={"phoneNumber"}
            value={user?.phoneNumber}
            register={register("phoneNumber")}
          />
          {errors.phoneNumber ? (
            <span>{errors.phoneNumber.message}</span>
          ) : (
            <></>
          )}
          <div>
            <button>Salvar Alterações</button>
            <button>Excluir Contato</button>
          </div>
        </Form>
      )}
      {!editMode && (
        <section>
          <h3>Email</h3>
          <p>{user?.email}</p>

          <h3>Telefone</h3>
          <p>{user?.phoneNumber}</p>

          <button onClick={() => setEditMode(true)}>Editar</button>
        </section>
      )}
    </ModalMain>
  );
};
