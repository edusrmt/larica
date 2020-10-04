import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  div + div {
    margin-left: calc((20 / 3) * 1%);
  }
`;