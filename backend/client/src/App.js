import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Create from './pages/Create';
import Evaluate from './pages/Evaluate';
import EvaluateItem from './pages/EvaluateItem';

function App() {
  return (
    <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/create' component={Create} />
     <Route exact path='/evaluate' component={Evaluate} />
     <Route exact path='/evaluate/:slug' component={EvaluateItem} />
    </Switch>
  );
}

export default App;
