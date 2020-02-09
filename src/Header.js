import React from 'react';
import './App.css';

const Header = ()=> {
  return (
    <div className="header">
      <a href="#a">Home</a>
      <a href="#a">Apps</a>
      <a href="#a" className="last">About</a>
    </div>
  );
}

export default Header;