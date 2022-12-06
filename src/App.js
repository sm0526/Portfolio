import React from 'react';
import { Header, Project, Contact } from './components';
import { Navigation, Footer } from "./layout";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Header />
        </Route>
        <Route exact path='/projects'>
          <Project />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
