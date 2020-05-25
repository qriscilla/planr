import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/layout/Navbar';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import Home from './components/pages/Home';

// Style
const app = {
  minHeight: '100vh',
  margin: '0',
  backgroundImage: 'linear-gradient(to bottom right, #818E9B, #EBCEB4)'
}

function App() {
  return (
    <Router>
      <div style={app}>
        <Switch>
          <Route path='/login' component={LogIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/home' component={Home} />
        </Switch>
      </div>      
    </Router>
  );
}

export default App;
