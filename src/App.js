import React from 'react';
import { Header, Project, Footer } from './components';
import './App.css';
import { Navigation } from "./layout";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Header />
        </Route>
        <Route exact path='/projects'>
          <Project />
        </Route>
        <Route exact path='/contact'>
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
