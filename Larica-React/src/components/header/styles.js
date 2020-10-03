import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#fff;
  position:absolute;
  height:60px;
  top:0;
  left:0;

  width:100%;
  -webkit-box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.3);
`;

export const TextLogo = styled.h1`
  color:#58B76C;
  font-size:38px;
  font-weight:bold;
  display: block;

`
export const CustomButton = styled(Link)`
  text-decoration: none;
  align:right;
  button{
    background:#58B76C;
    border-radius:10px;
    border:0;
    padding:10px 20px;
  }
  span{
    color:#fff;
    font-weight:bold;
    font-size:16px;
  }
  &:hover{
    opacity:0.85;
   }

`
