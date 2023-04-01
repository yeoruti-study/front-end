import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    outline: none; 
  }
  html, body, #root {
    height: 100%;
    margin: 0;
    overflow-y: hidden;
  }
  html{
    font-size: 16px;
  }
  button {
    background-color: #fff;
    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 400px) {
    html { 
      font-size: 3.5vw;
    }
  }
`;

export default GlobalStyles;
