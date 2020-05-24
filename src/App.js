import React from 'react';
import './App.css';
import LogIn from './components/auth/LogIn';

// Style
const app = {
  minHeight: '100vh',
  margin: '0',
  backgroundImage: 'linear-gradient(to bottom right, #818E9B, #EBCEB4)'
}

function App() {
  return (
    <div style={app}>
      <LogIn />
    </div>
  );
}

export default App;
