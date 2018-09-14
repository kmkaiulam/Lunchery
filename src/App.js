import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from  './pages/Dashboard';
import ChefDashboard from './pages/ChefDashboard';
import ProfilePage from './pages/ProfilePage';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LoginForm from './pages/LoginForm'
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
          <Route exact path='/chefdashboard' component={ChefDashboard}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={LoginForm}/>
          <Route exact path='/chefsearch' component={ChefSearch}/>
          <Route exact path='/profilepage' component={ProfilePage}/>
        </div>
      </Router>
    );
  }
}

export default App;
