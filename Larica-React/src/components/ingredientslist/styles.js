import styled from 'styled-components';

export const Container = styled.ul`
  display:grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 1.5rem;
  list-style:none;

  @media(max-width: 870px){
    grid-template-columns: repeat(2,1fr);
  }

  @media(max-width: 590px){
    grid-template-columns: repeat(1,1fr);
  }

  li.add {
    border: 2px solid #66D6A0;
    border-radius: 30px;
    font-size: 1.3rem;
    color: #559F64;
    box-sizing: border-box;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    button {
      background-color: #66D6A0;
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

    input {
      width: calc(100% - 4rem);
      height: 3rem;
      border: none;
      border-radius: 30px;
      font-size: 1.3rem;
    }

    input::placeholder {
      color: #66D6A0;
      font-size: 1.3rem;
    }
  }
`;
export const SearchButton = styled.button`
  position:fixed;
  right:20px;
  bottom:20px;
  height: 3rem;
  width: 10rem;
  border-radius: 30px;
  border:none;
  padding:10px;
  background-color: ${props => props.disable ? '#bff5db' : '#559F64'};
  justify-content:space-between;
  align-items:center;
  display:flex;
  flex-direction:row;
  color:white;
  font-weight:bold;
  img {
      width: 1.5rem;
  }
`
;
