import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from  './components/dashboard';
import Landing from './components/landing';
import Signup from './components/signup';
import Login from './components/login';
import NavBar from './components/navbar';
import ChefSearch from './components/chef-search';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={Landing}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/chefsearch' component={ChefSearch}/>
        </div>
      </Router>
    );
  }
}

export default App;
