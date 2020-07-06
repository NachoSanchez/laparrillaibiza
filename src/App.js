import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import LanguageContextProvider from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Drinks from './components/Drinks';
import Home from './components/Home';
import Proposal from './components/Proposal';
import Nav from './components/Nav';
import Where from './components/Where';
import Menu from './components/Menu';
import './index.css';

//Refactored Components
import Home2 from './componentsV2/Home';
import Contact from './componentsV2/Contact'

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
            <Nav />
            <Menu />
          </Route>
          <Route path='/drinks' exact>
            <Nav />
            <Drinks />
          </Route>
          <Route path='/optimised' exact >
            <Home2 />
            <Contact />

            
          </Route>
        </BrowserRouter>
      </LanguageContextProvider>
    </div>
  );
}

export default App;
