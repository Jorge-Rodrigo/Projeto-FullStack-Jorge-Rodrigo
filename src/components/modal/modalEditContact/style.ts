import styled from "styled-components";

export const ModalMain = styled.main`
  h1 {
    color: var(--color-white);
    text-align: center;
  }
  form {
    span {
      color: var(--color-red);
      display: flex;
      justify-content: center;
      padding: 5px 0;
      font-size: 17px;
    }
    div {
      display: flex;
      justify-content: center;
      gap: 20px;
      align-items: center;
      padding: 35px 0;
      button {
        height: 45px;
        width: 35%;
        font-size: 20px;
        border-radius: 16px;
        background-color: var(--color-main);
        color: var(--color-white);
        border: 2px solid var(--color-blue);
        :hover {
          background-color: var(--color-blue4);
          border: 2px solid var(--color-white);
          color: var(--color-blue);
        }
      }
      button:last-child {
        background-color: var(--color-red);
        color: var(--color-white);
        border: 2px solid var(--color-white);
        :hover {
          border: 2px solid var(--color-red);
          background-color: var(--color-red2);
          color: var(--color-red);
        }
      }
    }
  }
`;
