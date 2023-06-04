import { iInputProps } from "../../interfaces/componentsInterface";
import { FieldStyled } from "./style";

const Input = ({
  label,
  type,
  placeholder,
  id,
  register,
  disable,
  value,
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
        defaultValue={value}
      />
    </FieldStyled>
  );
};

export default Input;
