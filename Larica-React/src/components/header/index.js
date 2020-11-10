import React from 'react';

import { Container, TextLogo,CustomButton} from './styles';

function header() {
  return (
    <Container>
      <TextLogo to="/">Larica</TextLogo>
      <CustomButton to="/ingredients">
        <button>
          <span>Meus ingredientes</span>
        </button>
      </CustomButton>
    </Container>
  );
}
export default header;
