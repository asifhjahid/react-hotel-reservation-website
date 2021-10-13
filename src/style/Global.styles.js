import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --primaryColor: #af9a7d;
    --mainWhite: #fff;
    --offWhite: #f7f7f7;
    --mainBlack: #222;
    --mainGrey: #ececec;
    --darkGrey: #cfcfcf;
    --mainTransition: all 0.3s linear;
    --mainSpacing: 3px;
    --lightShadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
    --darkShadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
  }
 
  body {
    padding-top: 66px;
    color: var(--mainBlack);
    background: var(--mainWhite);
    font-family:sans-serif;
    line-height: 1.4;
  }


`

export default GlobalStyle;