import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  position: fixed;
  top: 0;
  left: 0;

  background-color:#fff;
  height: 60px;
  width: 100%;
  padding: 0 5vw;

  -webkit-box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.3);
`;

export const TextLogo = styled(Link)`
  color:#58B76C;
  font-size:38px;
  font-weight:bold;
  font-family: 'Berkshire Swash', cursive;
  text-decoration: none;
`
export const CustomButton = styled(Link)`
  text-decoration: none;

  display: flex;
  button{
    background:#58B76C;
    border-radius:30px;
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

export const ExternalContainer = styled.div`
  flex: 1;
`;