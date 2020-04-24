import React from 'react';
import NavBar from './components/NavBar.js'
import Movies from './components/Movies.js'
import Actors from './components/Actors.js'
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <div className="App">
        <NavBar />
        <Movies />
        <Actors />
        <h2>Testing</h2>
    </div>
  );
}

export default App;
