import React from 'react';
import styles from './Nav.module.css';
import Friends from "./Friends/Friends";
import NavItem from "./NavItem/NavItem";


const Nav = (props) => {
    let friendsDataMap = props.navPage.navFriends.map((fr) => <Friends key={fr.id} name={fr.name} image={fr.image} />);

  return (
    <nav className={styles.nav}>
      <ul className={styles.ullist}>
        <NavItem url={"./profile"} name={"Profile"}/>
        <NavItem url={"./dialogs"} name={"Dialogs"}/>
        <NavItem url={"./music"} name={"Music"}/>
        <NavItem url={"./news"} name={"News"}/>
        <NavItem url={"./settings"} name={"Settings"}/>
      </ul>
      <div className={styles.friends}>
        <h4>Recent Chats</h4>
        {friendsDataMap}
      </div>
    </nav>
  )
};

export default Nav;