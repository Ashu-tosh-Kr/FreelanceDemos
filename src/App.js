import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './pages/Homepage';
import { Route, Switch } from 'react-router-dom';

import theme from './theme';
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
