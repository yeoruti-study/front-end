import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    outline: none; 
  }
  html, body, #root {
    height: 100%;
    margin: 0;
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
`;

export default GlobalStyles;
