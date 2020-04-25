import React from 'react';
import NavBar from './components/NavBar.js';
import Movies from './components/Movies/Movies.js';
import Actors from './components/Actors.js';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MovieDetails from './components/Movies/MovieDetails.js'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/actors" component={Actors} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:id" component={MovieDetails}/>
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
