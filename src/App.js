import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from  './pages/Dashboard';
import ChefDashboard from './pages/ChefDashboard';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ChefSearch from './pages/ChefSearch';
import NavBar from './components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={Landing}/>
          <Route exact path='/dashboard' component={ChefDashboard}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/chefsearch' component={ChefSearch}/>
        </div>
      </Router>
    );
  }
}

export default App;
