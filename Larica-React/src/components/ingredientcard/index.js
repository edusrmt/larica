import React from 'react';

import { Container } from './styles';
import XMark from '../../assets/icons/x-mark.svg';

function ingredientCard ({ name, remove }) {
  return (
    <Container>
      <button onClick={remove}>
        <img src={XMark} alt="remover ingrediente"/>
      </button>
      {name}
    </Container>
  );
}

export default ingredientCard;