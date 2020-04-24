import React from 'react';
import NavBar from './components/NavBar.js';
import Movies from './components/Movies.js';
import Actors from './components/Actors.js';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/actors" component={Actors} />
          <Route path="/movies" component={Movies} />
        </Switch>
      </div>
    </Router>
  );
}

const HomePage = () => (
  <div>
    <h2>Home page!</h2>
  </div>
);

export default App;
