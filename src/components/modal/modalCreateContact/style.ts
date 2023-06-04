import styled from "styled-components";

export const ModalMain = styled.main`
  h1 {
    color: var(--color-white);
    text-align: center;
  }
  form {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 35px 0;
      button {
        height: 45px;
        width: 40%;
        font-size: 20px;
        border-radius: 16px;
        background-color: var(--color-main);
        color: var(--color-white);
        border: 2px solid var(--color-blue);
      }
    }
  }
`;
