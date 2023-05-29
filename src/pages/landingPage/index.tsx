import { Link } from "react-router-dom";
import { Container, MainDiv } from "./style";

export const LandingPage = () => {
  return (
    <Container>
      <div>
        <MainDiv>
          <h1>
            Book{" "}
            <span>
              <i>of</i>
            </span>{" "}
            Contacts
          </h1>
          <p>
            Seja bem Vindo ao lugar onde você salva seus contatos para não
            esquecer sobre eles...
          </p>
          <div>
            <div>
              <p>ja tem uma conta?</p>
              <Link to={"/login"}>Entrar</Link>
            </div>
            <div>
              <p>Não tem uma conta?</p>
              <Link to={"/register"}>Cadastrar-se</Link>
            </div>
          </div>
        </MainDiv>
      </div>
    </Container>
  );
};
