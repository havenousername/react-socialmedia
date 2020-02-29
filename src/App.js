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

const App = (objects) => {
    console.log(objects.state.navPage);
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <div className="app-wrapper">
                    <Nav state={objects.state.navPage}/>
                    <div className="app-wrapper_content">
                        <Route path={"/dialogs"} render={(props) => <Dialogs {...props} state={objects.state.messagesPage}/>}/>
                        <Route path={"/profile"}  render={(props) => <Profile {...props} state ={objects.state.profilePage} addPost={objects.addPost}/>}/>
                        <Route path={"/music"}  render={()=> <Music />}/>
                        <Route path={"/news"}  render={()=> <News />}/>
                        <Route path={"/settings"}  render={()=> <Settings />}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
