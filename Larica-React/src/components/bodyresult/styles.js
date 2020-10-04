import styled from 'styled-components';


export const Container = styled.div`
  width:100%;
  min-height: 100%;
  padding-top: 40vh;
  margin-top: 60px;
  box-sizing: border-box;

  background: url(${props => props.bgImage}) no-repeat center top;
  background-size: 100% auto;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Content = styled.div`
  width: 100%;
  padding: 5vw;
  background-color:#fff;
  border-top-left-radius:40px;
  border-top-right-radius:40px;
  -webkit-box-shadow: 0px -5px 15px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px -5px 15px -4px rgba(0,0,0,0.75);
  box-shadow: 0px -5px 15px -4px rgba(0,0,0,0.75);
`;
