import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './components/containers/Main';
import Landing from './pages/Landing';
import './App.css';

class App extends Component {
  render() {
    return (
        <div role='main' className="App">
         <Router>
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Main />
          </Switch>
        </Router>
        </div>
    );
  }
}

export default App;
