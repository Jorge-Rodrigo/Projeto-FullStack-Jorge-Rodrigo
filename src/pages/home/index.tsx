import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div>
        <h1>Book of Contacts</h1>
        <p>{user?.fullName}</p>
      </div>
      <section>
        <button>Adicionar contato</button>
        <div>
          <p>Seus contatos</p>
        </div>
      </section>
    </>
  );
};
