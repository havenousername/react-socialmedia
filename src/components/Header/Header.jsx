import React from 'react';
import s from './Header.module.css';
import Search from './Search/Search';

const Header = () => {
  return (
    <header className={s.header}>
      < img src={require("../../img/icon.svg")}
        alt="logo" className={s.logo} />
      <div className={s.wrap}>
        <Search />
      </div>
    </header>
  )
}

export default Header;