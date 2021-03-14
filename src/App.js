import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import LanguageContextProvider from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Proposal from './components/Proposal';
import Where from './components/Where';
import Menu from './componentsV2/Menu';
import './index.css';

//Refactored Components
import Home2 from './componentsV2/Home';
import Contact from './componentsV2/Contact';
import Beverages from './componentsV2/Beverages';
import Breakfast from './componentsV2/Breakfast';
import Where2 from './componentsV2/Where';

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
          <Route path='/menu' component={Menu} exact/>
          <Route path='/breakfast' component={Breakfast} exact/>
          <Route path='/drinks' exact>
            <Beverages />
          </Route>
          <Route path='/optimised' exact >
            <Home2 />
          </Route>
          <Route path='/form' exact>
            <Contact />
          </Route>
          <Route path='/bev'>
            <Where2 />
          </Route>
        </BrowserRouter>
      </LanguageContextProvider>
    </div>
  );
}

export default App;
