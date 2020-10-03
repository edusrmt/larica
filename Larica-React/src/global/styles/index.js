import { createGlobalStyle } from 'styled-components';
import BackgroundImage  from '../../assets/background/background.jpeg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500&display=swap');
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  body{
    background: url(${BackgroundImage}) no-repeat center top;
    -webkit-font-smoothing: antialiased !important;
    background-size: cover;
  }
  body,input,button{
    font:14px Montserrat, sans-serif;
  }
  #root{
    margin:0 auto;
  }

  button{
    cursor: pointer;
  }
`;
