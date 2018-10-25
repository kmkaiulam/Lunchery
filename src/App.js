import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from  './pages/Dashboard';
import ChefDashboard from './pages/ChefDashboard';
import ProfilePage from './pages/ProfilePage';
import Landing from './pages/Landing';
import RegistrationPage from './pages/RegistrationPage';
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
          <Route exact path='/chefdashboard' component={ChefDashboard}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/registration' component={RegistrationPage}/>
          <Route exact path='/chefsearch' component={ChefSearch}/>
          <Route exact path='/profilepage' component={ProfilePage}/>
          <Route exact path='/login' component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
