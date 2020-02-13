import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav'
import Profile from './components/Profile';

const App =  ()=> {
  return (
    <div className="app">
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Profile />
      </div>
    </div>
  );
}

export default App;
