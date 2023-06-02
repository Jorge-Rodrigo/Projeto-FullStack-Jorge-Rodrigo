import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;

  h1 {
    color: var(--color-white);
    display: flex;
    justify-content: center;
    gap: 15px;
    padding-bottom: 50px;
    padding-top: 100px;
    font-size: 200%;
    span {
      color: var(--color-blue);
    }
  }
  p {
    color: var(--color-white);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 65%;
    font-size: 22px;
    border: 2px solid var(--color-blue);
    text-align: center;
    padding: 25px 10px;
    border-radius: 25px;
    :hover {
      color: var(--color-blue);
    }
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
        font-size: 18px;
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
  min-height: 100vh;

  div:first-child {
    max-width: 1100px;
    margin: 0 auto;
  }
`;
