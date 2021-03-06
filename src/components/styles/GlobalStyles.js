import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: #f7f9f9;
    height: 100vh;
    width: 100%; 
    margin: 0;
    overscroll-behavior: none;
    font-family: 'Inter', sans-serif;
  }

  #root {
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;

    display: grid;
    justify-content: space-around;
    grid-template-rows: auto auto 1fr;
  }
`;
