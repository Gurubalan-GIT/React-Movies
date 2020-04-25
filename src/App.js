import React from 'react';
import NavBar from './components/NavBar.js';
import Movies from './components/Movies/Movies.js';
import Actors from './components/Actors/Actors.js';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MovieDetails from './components/Movies/MovieDetails.js';
import ActorDetails from './components/Actors/ActorDetails.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/actors" exact component={Actors} />
          <Route path="/actors/:id" component={ActorDetails} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  );
}

const HomePage = () => (
  <div>
    <br></br>
    <br></br>
    <br></br>
    <div className="jumbotron text-center">
      <h1 className="display-4">Movie DB Application</h1>
      <p className="lead">An organised and efficient application for Movies using TMDB API.</p>
      <hr className="my-4"></hr>
      <p>Check it out!</p>
    </div>
  </div>
);

export default App;
