import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import Dashboard from  './components/dashboard';
import Landing from './components/landing';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path='/' component={Landing}/>
            <Route exact path='/dashboard' component={Dashboard}/>
        </div>
      </Router>
    );
  }
}

export default App;
