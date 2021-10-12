import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript initialColorMode={'dark'} />
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
