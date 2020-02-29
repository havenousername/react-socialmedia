import React from 'react';
import styles from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";


const Nav = (props) => {
  let friendsDataMap = props.state.navFriends.map((fr) => <Friends key={fr.id} name={fr.name} image={fr.image} />);

  return (
    <nav className={styles.nav}>
      <ul className={styles.ullist}>
        <li className={styles.item}>
          <NavLink className={styles.link}  activeClassName={styles.active} to="/profile">Profile</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link}  activeClassName={styles.active} to="/dialogs">Dialogs</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link}  activeClassName={styles.active} to="/music">Music</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link}  activeClassName={styles.active} to="/news">News</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link}  activeClassName={styles.active} to="/settings">Settings</NavLink>
        </li>
      </ul>
      <div className={styles.friends}>
        {friendsDataMap}
      </div>
    </nav>
  )
};

export default Nav;