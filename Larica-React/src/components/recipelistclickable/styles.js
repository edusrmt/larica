import styled from 'styled-components';

export const Container = styled.ul`
  display:grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 70px;
  list-style:none;
  @media(max-width: 870px){
    grid-template-columns: repeat(2,1fr);
  }
  @media(max-width: 590px){
    grid-template-columns: repeat(1,1fr);
  }
`;
