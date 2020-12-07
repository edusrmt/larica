import styled from 'styled-components';

export const ImagemThumb = styled.img`
  height: 5rem;
  width:5rem;
  border-radius: 50%;
`
export const HeaderContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;

  >div{
    display:flex;
    align-items:center;
    >h1{
      color:#222;
      padding: 0px 20px;
      @media(max-width: 870px){
        font-size:18px;
      }
    }
  }
  >button{
    padding: 12px 40px;
    border:none;
    background-color:#58B76C;
    border-radius:20px;
    color:white;
    font-weight:bold;
    @media(max-width: 870px){
      font-size:12px;
      padding:8px 20px;
    }
  }
`
export const Container = styled.ul`
  padding: 30px 0px;
  display:grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 1.5rem;
  list-style:none;
  justify-content:space-between;

  @media(max-width: 870px){
    grid-template-columns: repeat(2,1fr);
  }

  @media(max-width: 590px){
    grid-template-columns: repeat(1,1fr);
  }

  >li{
    background-color: #F6F7F9;
    border-radius: 30px;
    font-size: 1.3rem;
    color: #72767A;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    div {
      background-color: #72767A;
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
  }

`;
