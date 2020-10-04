import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased !important;    
  }

  body, input, button {
    font: 14px Montserrat, sans-serif;
  }

  #root{
    margin:0 auto;
  }

  button {
    cursor: pointer;
  }
`;
