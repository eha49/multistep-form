import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        font-family: 'Ubuntu-Sans', sans-serif;
    }

    html {
        --weight-regular: 400;
        --weight-medium: 500;
        --weight-bold: 700;

        --marine-blue: hsl(213, 96%, 18%);
        --purplish-blue: hsl(243, 100%, 62%);
        --pastel-blue: hsl(228, 100%, 84%);
        --light-blue: hsl(206, 94%, 87%);
        --strawberry-red: hsl(354, 84%, 57%);
        
        --cool-gray: hsl(231, 11%, 63%);
        --light-gray: hsl(229, 24%, 87%);
        --magnolia: hsl(217, 100%, 97%);
        --alabaster: hsl(231, 100%, 99%);
        --white: hsl(0, 0%, 100%);

        height: 100%;
    }

    body {
        height: 100%;
        background-color: var(--magnolia);
    }

    body, h1, h2, p, ol, li {
        margin: 0;
        padding: 0;
        border: 0;
    }

    ol, li {
        list-style: none;
    }

`;

export default GlobalStyles;
