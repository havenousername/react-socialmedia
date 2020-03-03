import React from 'react';
import styles from '../Nav.module.css';
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
  return (
        <li className={styles.item}>
          <NavLink className={styles.link}  activeClassName={styles.active} to={props.url}>{props.name}</NavLink>
        </li>
  )
};

export default NavItem;