import React from 'react';
import styles from './Nav.module.css';
import Friends from "./Friends/Friends";
import NavItem from "./NavItem/NavItem";
import Nav from "./Nav";
import StoreContext from "../../StoreContext";


const NavContainer = (props) => {
    return (
      <StoreContext.Consumer>
          {
              (store) => {
                  let state = store.getState();
                  return <Nav navPage={state.navPage}/>
                }
          }
      </StoreContext.Consumer>
  )
};

export default NavContainer;