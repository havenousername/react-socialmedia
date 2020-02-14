import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ullist}>
        <li className={styles.item}>
          <a className={`${styles.link}  ${styles.active}`} href="#home">Profile</a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#home">Messages</a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#home">Music</a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#home">News</a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#home">Settings</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;