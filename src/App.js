import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";

const App = (objects) => {
    // debugger;
    return (
            <div className="app">
                <Header/>
                <div className="app-wrapper">
                    <NavContainer/>
                    <div className="app-wrapper_content">
                        <Route path={"/dialogs"} render={(props) => <DialogsContainer />}/>
                        <Route path={"/profile"}  render={(props) => <Profile />}/>
                        <Route path={"/music"}  render={()=> <Music />}/>
                        <Route path={"/news"}  render={()=> <News />}/>
                        <Route path={"/settings"}  render={()=> <Settings />}/>
                    </div>
                </div>
            </div>
    );
};

export default App;
