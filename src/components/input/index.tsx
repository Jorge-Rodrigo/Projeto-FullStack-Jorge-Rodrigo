import { iInputProps } from "../../interfaces/componentsInterface";
import { FieldStyled } from "./style";

const Input = ({
  label,
  type,
  placeholder,
  id,
  register,
  disable,
}: iInputProps) => {
  return (
    <FieldStyled>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        {...register}
        disabled={disable}
      />
    </FieldStyled>
  );
};

export default Input;
