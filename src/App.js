import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import LanguageContextProvider from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Drinks from './components/Drinks';
import Home from './components/Home';
import Proposal from './components/Proposal';
import Where from './components/Where';
import Menu from './components/Menu';
import './index.css';

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <BrowserRouter>
          <Route path='/' exact>
            <Navigation/>
            <Home />
            <Proposal />
            <Where />
            <Menu />
          </Route>
          <Route path='/menu' exact>
            <Menu />
          </Route>
          <Route path='/drinks' exact>
            <Drinks />
          </Route>
        </BrowserRouter>
      </LanguageContextProvider>
    </div>
  );
}

export default App;
