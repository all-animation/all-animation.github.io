import { createGlobalStyle } from "styled-components";
import { globals } from "./index";

const GlobalStyles = createGlobalStyle`
    ${globals}

    * {
        box-sizing: border-box;
    }

    body, html {
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: #090b10;
        color: #c8ccd4;
        scrollbar-width: thin;
        scrollbar-color: #00ff6a #090b10;
    }

    body::-webkit-scrollbar {
        width: 6px;
    }

    body::-webkit-scrollbar-track {
        background: #090b10;
    }

    body::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #00ff6a, #00d4ff);
        border-radius: 20px;
    }

    ::selection {
        background: rgba(0, 255, 106, 0.25);
        color: #fff;
    }
`;

export default GlobalStyles;
