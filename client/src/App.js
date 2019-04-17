import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Workout from './components/Workout';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="App">
          <div>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/workouts' component={Workout} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
