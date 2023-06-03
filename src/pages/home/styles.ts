import styled from "styled-components";

export const MainStyled = styled.main`
  section:first-child {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    h1 {
      color: var(--color-white);
      font-size: 35px;
      :hover {
        color: var(--color-blue);
        span {
          color: var(--color-white);
        }
      }
      span {
        color: var(--color-blue);
      }
    }

    div {
      display: flex;
      gap: 12px;
      padding: 10px 15px;
      background-color: var(--color-blue2);
      border: 2px solid var(--color-blue);
      border-radius: 16px;
      height: 50px;
      cursor: pointer;
      :hover {
        background-color: var(--color-main);
        border: 2px solid var(--color-white);
      }
      p {
        font-size: 20px;
        color: var(--color-white);
      }
    }
  }

  section:last-child {
    width: 100%;
    background-color: var(--color-blue2);
    border: 2px solid var(--color-blue);
    border-radius: 18px;
    padding: 20px 10px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      width: 55%;
      margin: 15px 0;
      height: 55px;
      background-color: var(--color-main);
      border: 2px solid var(--color-blue);
      color: var(--color-white);
      font-size: 20px;
      border-radius: 20px;
      @media (min-width: 700px) {
        width: 30%;
      }
      :hover {
        background-color: transparent;
        border: 2px solid var(--color-white);
        color: var(--color-blue);
      }
    }
    div {
      width: 100%;
      p {
        color: var(--color-blue);
        font-size: 25px;
        padding: 15px 0;
        :hover {
          color: var(--color-white);
          text-decoration: underline;
        }
      }
      ul {
        display: flex;
        list-style: none;
        width: 100%;
        height: 400px;
        padding: 20px 15px;
        flex-direction: row;
        justify-content: space-between;
        overflow-x: auto;
        gap: 15px;

        @media (min-width: 700px) {
          flex-wrap: wrap;
          height: 900px;
          gap: 10px;
        }
        li {
          display: flex;
          min-width: 80%;
          height: 100%;
          flex-direction: column;
          align-items: center;
          background-color: var(--color-main);
          border: 3px solid var(--color-white);
          border-radius: 30px;
          padding: 10px 10px;
          @media (min-width: 700px) {
            min-width: 24%;
            height: 45%;
          }
          h2 {
            color: var(--color-purple);
            padding: 10px 0;
            font-size: 24px;
          }
          div {
            p:first-child {
              color: var(--color-blue3);
            }
            p:last-child {
              color: var(--color-white);
            }
          }
          button {
            width: 50%;
          }
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
    padding: 30px 10px;
  }
`;
