import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family:'Inter', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    }

   *{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    font-family:'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }
    :root{
        --color-white:#ffffff;
        --color-main: #1d3557;
        --color-blue:#14ffd9;
        --color-blue2:#192c56;
        --color-red:#fe0000;
        --color-red2:#800000;
        --color-blue3:#8fb4be;
        --color-blue4:#003471;
        --color-purple:#7d6cbd;
    }
`;
