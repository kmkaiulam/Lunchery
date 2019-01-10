import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from  './pages/Dashboard';
import ProfilePage from './pages/ProfilePage';
import Landing from './pages/Landing';
import RegistrationPage from './pages/RegistrationPage';
import Login from './pages/Login';
import LunchGroups from './pages/LunchGroups';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div role='main' className="App">
        <div className = 'lunchery-banner'></div>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/registration' component={RegistrationPage}/>
          <Route exact path='/profilepage' component={ProfilePage}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/lunchgroups' component={LunchGroups}/>
        </div>
      </Router>
    );
  }
}

export default App;
