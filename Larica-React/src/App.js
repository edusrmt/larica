import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from '../../Larica-React/src/components/header'
import GlobalStyle from './global/styles';

function App() {
  return (
   <BrowserRouter>
    <Header/>
    <Routes/>
    <GlobalStyle/>
   </BrowserRouter>
  );
}

export default App;
