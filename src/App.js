import React from 'react';
import Navbar from './components/layout/Navbar';
import Month from './components/calendar/Month';

// Style
const app = {
  margin: '20px'
}
const navbar = {
  height: '4vh'
}
const main = {
  minHeight: 'calc(100vh - 4vh)',
  border: '2px solid black'
}

function App() {
  return (
    <div style={app}>

      <div style={navbar}>
        <Navbar />        
      </div>

      <div style={main}>
        <Month />        
      </div>

    </div>
  );
}

export default App;
