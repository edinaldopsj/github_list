import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  html, body, #root {
    height: 100%;
    background-color: #0d1117;
  }
  
  body {
    font-feature-settings: 'lnum';
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }

`;
