import styled from "styled-components";

export const RegisterForm = styled.section`
  background-color: var(--color-blue2);
  border: 2px solid var(--color-blue);
  width: 100%;
  padding: 20px 14px 45px 14px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  @media (min-width: 700px) {
    width: 85%;
  }
  h1 {
    margin: 0 auto;
    font-size: 35px;
    color: var(--color-white);
  }
  p {
    margin: 0 auto;
    font-size: 20px;
    color: var(--color-white);
  }

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
    align-items: center;
    padding-top: 30px;
    button {
      width: 65%;
      height: 56px;
      border-radius: 16px;
      background-color: transparent;
      border: 3px solid var(--color-blue);
      color: var(--color-white);
      font-size: 20px;
      :hover {
        background-color: var(--color-main);
        border: 3px solid var(--color-white);
      }
      @media (min-width: 700px) {
        width: 45%;
      }
    }
  }
`;

export const Container = styled.div`
  background-color: var(--color-main);
  width: 100%;
  min-height: 100vh;

  div:first-child {
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px 0;
  }
  section {
    margin: 0 auto;
  }
`;
