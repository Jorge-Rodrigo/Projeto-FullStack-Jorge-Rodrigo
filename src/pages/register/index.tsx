import { useContext } from "react";
import Form from "../../components/forms";
import { UserContext } from "../../context/userContext";
import { tUserRequest } from "../../interfaces/userInterfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import { userSchema } from "../../schemas/userSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/input";
import { Container, RegisterForm } from "./style";

export const RegisterPage = () => {
  const { register: registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<tUserRequest>({
    resolver: zodResolver(userSchema),
  });

  const onHandleSubmit: SubmitHandler<tUserRequest> = (data) => {
    const body = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      phoneNumber: data.phoneNumber,
    };
    registerUser(body);
    reset();
  };
  return (
    <Container>
      <div>
        <RegisterForm>
          <h1>Cadastro</h1>
          <p>Crie sua conta para se conectar com o mundo!</p>
          <Form sub={handleSubmit(onHandleSubmit)}>
            <Input
              label={"Nome Completo"}
              type={"text"}
              placeholder={"Digite seu Nome Completo"}
              id={"fullName"}
              register={register("fullName")}
            />
            {errors.fullName ? <span>{errors.fullName.message}</span> : <></>}

            <Input
              label={"Email"}
              type={"email"}
              placeholder={"Digite seu Email"}
              id={"email"}
              register={register("email")}
            />
            {errors.email ? <span>{errors.email.message}</span> : <></>}

            <Input
              label={"Senha"}
              type={"password"}
              placeholder={"Digite sua Senha"}
              id={"password"}
              register={register("password")}
            />
            {errors.password ? <span>{errors.password.message}</span> : <></>}

            <Input
              label={"Confirmar Senha"}
              type={"password"}
              placeholder={"Digite sua senha novamente"}
              id={"PasswordConfirm"}
              register={register("passwordConfirm")}
            />
            {errors.passwordConfirm ? (
              <span>{errors.passwordConfirm.message}</span>
            ) : (
              <></>
            )}

            <Input
              label={"Telefone"}
              type={"text"}
              placeholder={"Digite seu numero de telefone"}
              id={"phoneNumber"}
              register={register("phoneNumber")}
            />
            {errors.phoneNumber ? (
              <span>{errors.phoneNumber.message}</span>
            ) : (
              <></>
            )}
            <div>
              <button>Enviar</button>
            </div>
          </Form>
        </RegisterForm>
      </div>
    </Container>
  );
};
