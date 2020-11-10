import styled from 'styled-components';

export const Container = styled.li`
  background-color: #F4FFF7;
  border-radius: 30px;
  font-size: 1.3rem;
  color: #559F64;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  button {
    background-color: #358E48;
    border: none;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
  }

  img {
    width: 1.5rem;
  }
`;