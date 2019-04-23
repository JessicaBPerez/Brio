import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home.jsx'
import Workout from './components/Workout';
import IndividualWorkout from './components/IndividualWorkout';
import Recipes from './components/Recipes.jsx'
import IndividualExercise from './components/IndividualExercise.jsx'
import IndividualRecipe from './components/IndividualRecipe';
import Gyms from './components/Gyms';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/workouts' component={Workout} />
              <Route path='/workouts/:id' component={IndividualWorkout} />
              <Route exact path='/exercise/:id' component={IndividualExercise} />
              <Route exact path='/recipes' component={Recipes} />
              <Route path='/recipes/:id' component={IndividualRecipe} />
              <Route exact path='/gyms' component={Gyms} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
