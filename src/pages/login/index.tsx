import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../../components/forms";
import Input from "../../components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLogin } from "../../schemas/userSchemas";
import { tUserLogin } from "../../interfaces/userInterfaces";
import { Link } from "react-router-dom";
import { Container, LoginForm } from "./style";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export const LoginPage = () => {
  const { login, user, navigate } = useContext(UserContext);

  if (user) {
    navigate("/home");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<tUserLogin>({
    resolver: zodResolver(userLogin),
  });

  const onHandleSubmit: SubmitHandler<tUserLogin> = (data) => {
    login(data);
    reset();
  };
  return (
    <Container>
      <div>
        <LoginForm>
          <h1>Login</h1>
          <Form sub={handleSubmit(onHandleSubmit)}>
            <Input
              label={"Email"}
              type={"email"}
              placeholder={"Digite seu email"}
              id={"email"}
              register={register("email")}
            />
            {errors.email ? <span>{errors.email.message}</span> : <></>}

            <Input
              label={"Senha"}
              type={"password"}
              placeholder={"Digite sua senha"}
              id={"password"}
              register={register("password")}
            />
            {errors.password ? <span>{errors.password.message}</span> : <></>}

            <div>
              <button>Enviar</button>
              <Link to={"/register"}>Não tem uma conta?</Link>
            </div>
          </Form>
        </LoginForm>
      </div>
    </Container>
  );
};
