import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/layout/Navbar';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import Home from './components/pages/Home';
import Configure from './components/pages/Configure';
import About from './components/pages/About';
import Plan from './components/pages/Plan';

export default class App extends Component {
  state = {
    buckets: [
      {
        title: 'TO DO',
        id: 1,
        tasks: [
          {
            title: 'Grocery shopping',
            id: 1,
          },
          {
            title: "Finish reading 'The Beautiful and Damned'",
            id: 2,
          },
          {
            title: 'Set up Firebase for planr app',
            id: 3,
          }
        ]
      },
      {
        title: 'IN PROGRESS',
        id: 2,
        tasks: [
          {
            title: 'Work on the front end of planr app',
            id: 4,
          },
        ]
      },
      {
        title: 'COMPLETED',
        id: 3,
        tasks: [
          {
            title: 'Go for a run',
            id: 5,
          },
          {
            title: 'Make vegan fudge brownie cookies',
            id: 6,
          },
        ]
      },
      {
        title: 'WILL NOT COMPLETE',
        id: 7,
        tasks: []
      },
      {
        title: 'IN THE FUTURE',
        id: 8,
        tasks: []
      }
    ],
  };

  render() {
    return (
      <Router>
        <div className='app'>
          <Switch>
            <Route path='/planr/login' exact component={LogIn} />
            <Route path='/planr/signup' exact component={SignUp} />
            <Route path='/planr' exact component={Home} />
            <Route 
              path='/planr/plan' 
              component={ () => <Plan {...this.state} /> } />
            <Route path='/planr/configure' exact component={Configure} />
            <Route path='/planr/about' exact component={About} />
          </Switch>
        </div>      
      </Router>
    );    
  }
}