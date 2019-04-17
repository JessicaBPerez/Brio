import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="App">
          <h1>Hi, you can see me now.</h1>
          <div>

            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
