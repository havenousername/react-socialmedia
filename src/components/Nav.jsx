import React from 'react';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="ul-list">
        <li>
          <a className='link' href="#home">Profile</a>
        </li>
        <li>
          <a className='link' href="#home">Messages</a>
        </li>
        <li>
          <a className='link' href="#home">Music</a>
        </li>
        <li>
          <a className='link' href="#home">News</a>
        </li>
        <li>
          <a className='link' href="#home">Settings</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;