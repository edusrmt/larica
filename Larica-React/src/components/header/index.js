import React from 'react';

import { Container, TextLogo,CustomButton} from './styles';

function header() {
  return (
    <Container>
      <TextLogo>Larica</TextLogo>
      <CustomButton>
        <button>
          <span>Meus ingredientes</span>
        </button>
      </CustomButton>
    </Container>
  );
}
export default header;
