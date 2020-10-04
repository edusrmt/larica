import React from 'react';

import { Container, Content } from './styles';

function bodyresult({children, bgImage}) {
  return (
    <Container bgImage={bgImage}>
      <Content>
        {children}
      </Content>
    </Container>
  );
}

export default bodyresult;
