import React from 'react';
import logo from '../Images/logo.svg';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">ReactND - Coding Practice</h1>
      <p className="App-description">This is an exercise in breaking out a single 
        component app into multiple, more manageable components</p>  
      <p className="App-description">This header rendered using a stateless functional component</p>  
    </header>
  )
}

export default Header