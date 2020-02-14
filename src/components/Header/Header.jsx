import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      < img src={require("../../img/icon.svg")}
        alt="logo" className={s.logo} />
    </header>
  )
}

export default Header;