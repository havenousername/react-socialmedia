import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <div className="app-wrapper">
                    <Nav/>
                    <div className="app-wrapper_content">
                        <Route path={"/dialogs"} component={Dialogs}/>
                        <Route path={"/profile"}  component={Profile}/>
                        <Route path={"/music"}  component={Music}/>
                        <Route path={"/news"}  component={News}/>
                        <Route path={"/settings"}  component={Settings}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
