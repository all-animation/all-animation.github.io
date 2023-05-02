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
        scrollBehavior: smooth;
    }


    body::-webkit-scrollbar {
        width: 6px;
    }
    body {
        scrollbar-width: thin;
        scrollbar-color: #333 #333;
    }
    body::-webkit-scrollbar-track {
        background: #333;
    }
    body::-webkit-scrollbar-thumb {
        background-color: #2dff96;
        border-radius: 20px;
        border: 3px solid #00D76B;
    }
`;

export default GlobalStyles;
