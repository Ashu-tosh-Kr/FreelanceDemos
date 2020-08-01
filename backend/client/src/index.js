import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import {DataProvider} from './Context.jsx'

ReactDOM.render(
  <DataProvider>
    <Router>
      <App />
    </Router>
  </DataProvider>,
  document.getElementById('root')
);

