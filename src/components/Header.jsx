import React from 'react';

const Header = () => {
  return (
    <header className="header">
      < img src={require("../img/icon.svg")}
        alt="logo" className="logo" />
    </header>
  )
}

export default Header;