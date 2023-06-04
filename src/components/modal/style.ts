import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  height: 1234px;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.5);
  z-index: 10000;
`;

export const MainDiv = styled.div`
  max-width: 1100px;

  @media (min-width: 700px) {
    margin: 0 auto;
  }
`;

export const ModalMain = styled.div`
  margin: 80px auto;
  background-color: var(--color-blue2);
  width: 100%;
  height: 100%;
  border: 3px solid var(--color-white);
  border-radius: 9px;
  padding: 20px 8px;
  @media (min-width: 700px) {
    width: 50%;
  }

  div:first-of-type {
    display: flex;
    justify-content: flex-end;
    padding: 0 15px;

    button:first-of-type {
      padding: 8px 10px;
      font-size: 15px;
      font-weight: 700;
      border-radius: 100%;
      background-color: transparent;
      border: 3px solid var(--color-white);
      color: var(--color-blue);
      :hover {
        background-color: var(--color-white);
        border: 3px solid var(--color-blue2);
        color: var(--color-blue2);
      }
    }
  }
`;
