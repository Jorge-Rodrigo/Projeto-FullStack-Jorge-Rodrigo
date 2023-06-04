import styled from "styled-components";

export const FieldStyled = styled.fieldset`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: none;
  label {
    color: var(--color-white);
    font-size: 20px;
  }
  input {
    background-color: transparent;
    color: var(--color-white);
    border: 2px solid var(--color-blue);
    width: 70%;
    height: 45px;
    border-radius: 12px;
    padding: 10px;
    outline: none;
    font-size: 20px;
    :focus {
      border: 2px solid var(--color-white);
    }
    ::placeholder {
      font-size: 20px;
      color: var(--color-white);
    }
    @media (min-width: 700px) {
      width: 45%;
    }
  }
`;
