import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:row;
`;

export const ImagemThumb = styled.img`
  height:9rem;
  border-radius:10px;
`
export const ContainerDescription = styled.div`
  padding:0px 10px;
  justify-content:space-between;
  display:flex;
  flex-direction:column;
  >h3{
    color: #666;
  }
  >p{
    color: #777;
  }
  >a{
    text-decoration:none;
    color:#559F64;
  }
`
