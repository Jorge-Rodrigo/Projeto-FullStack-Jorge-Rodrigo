import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { ContactsContext } from "../../context/contactsContext";
import { Container, MainStyled } from "./styles";
import { AiOutlineUser } from "react-icons/ai";
import { IconContext } from "react-icons";

export const HomePage = () => {
  const { user } = useContext(UserContext);
  const { contacts } = useContext(ContactsContext);

  return (
    <Container>
      <div>
        <MainStyled>
          <section>
            <h1>
              Book{" "}
              <span>
                <i>of</i>
              </span>
              {"  "}
              Contacts
            </h1>
            <div>
              <p>{user?.fullName}</p>
              <IconContext.Provider value={{ size: "25px", color: "#14ffd9" }}>
                <AiOutlineUser />
              </IconContext.Provider>
            </div>
          </section>
          <section>
            <button>Adicionar contato</button>
            <div>
              <p>Seus contatos:</p>
              <ul>
                {contacts &&
                  contacts.map((contact) => (
                    <li key={contact.id}>
                      <h2>{contact.fullName}</h2>
                      <div>
                        <p>Email:</p>
                        <p>{contact.email}</p>
                      </div>
                      <div>
                        <p>Numero:</p>
                        <p>{contact.phoneNumber}</p>
                      </div>
                      <button>Editar</button>
                    </li>
                  ))}
              </ul>
            </div>
          </section>
        </MainStyled>
      </div>
    </Container>
  );
};
