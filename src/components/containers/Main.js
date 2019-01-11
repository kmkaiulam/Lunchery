import React from 'react';
import { connect } from 'react-redux';
import { Route } from "react-router-dom";
import NavBar from '../../pages/travisFix/NavbarCopy'
import Dashboard from  '../../pages/Dashboard';
import ProfilePage from '../../pages/ProfilePage';
import LunchGroups from '../../pages/LunchGroups';
import RegistrationPage from '../../pages/RegistrationPage';
import Login from '../../pages/Login';

//NOTE: Concerning NavBar import
//React Testing passes locally, but fails on Travis due to some bug on Travis-CI related to relative path
//Copy of component made to resolve bug when doing shallow testing  

export class Main extends React.Component {
    render() {
      return (
        <div className="main">
          <NavBar />
          <div className='lunchery-banner'> </div>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/profilepage' component={ProfilePage}/>
          <Route exact path='/lunchgroups' component={LunchGroups}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/registration' component={RegistrationPage}/>
        </div>
      );
    }
  }


export default connect()(Main);