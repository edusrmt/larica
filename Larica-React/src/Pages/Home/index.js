import React from 'react';
import BodyResult from '../../components/bodyresult';
import Background from '../../assets/background/home.jpg';

function Home() {
  return (
    <BodyResult bgImage={Background}>
      <h1>Hello world!</h1>
    </BodyResult>
  );
}

export default Home;
