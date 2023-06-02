import { iFormProps } from "../../interfaces/componentsInterface";

const Form = ({ children, sub }: iFormProps) => {
  return <form onSubmit={sub}>{children}</form>;
};

export default Form;
