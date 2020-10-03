import React from 'react';

import { Container, TextLogo,CustomButton} from './styles';

function header() {
  return (
    <Container>
      <div/>
      <div>
      <TextLogo>Larica</TextLogo>
      </div>
      <div>
      <CustomButton>
        <button>
          <span>Meus ingredientes</span>
        </button>
      </CustomButton>
      </div>
    </Container>
  );
}
export default header;
