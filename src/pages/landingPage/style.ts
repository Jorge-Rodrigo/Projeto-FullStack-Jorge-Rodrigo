import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: var(--color-white);
    display: flex;
    justify-content: center;
    gap: 15px;
    padding-bottom: 50px;
    font-size: 200%;
    span {
      color: var(--color-blue);
    }
  }
  p {
    color: var(--color-blue);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 75%;
    font-size: 22px;
    padding-top: 20px;
  }
  div {
    padding-top: 25px;
    display: flex;
    margin: 0 auto;
    justify-content: space-evenly;
    flex-direction: column;
    width: 75%;
    gap: 5px;
    @media (min-width: 700px) {
      flex-direction: row;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        margin: 0 auto;
        width: 50%;
        height: 45px;
        border-radius: 16px;
        border: 2px solid var(--color-blue);
        color: var(--color-white);
        background-color: transparent;
        font-size: 20px;
        :hover {
          background-color: var(--color-white);
          color: var(--color-main);
        }
      }
    }
  }
`;

export const Container = styled.div`
  background-color: var(--color-main);
  width: 100%;
  height: 100vh;

  div:first-child {
    max-width: 1100px;
    margin: 0 auto;
  }
`;
