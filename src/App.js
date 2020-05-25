import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/layout/Navbar';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import Home from './components/pages/Home';
import Configure from './components/pages/Configure';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login' component={LogIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/home' component={Home} />
          <Route path='/configure' component={Configure} />
          <Route path='/about' component={About} />
        </Switch>
      </div>      
    </Router>
  );
}

export default App;
