import React from 'react';
import logo from '../img/logo.png';
import './Header.css';
function Header() {
  return (
    <div>
      <img className="center" src={logo} alt="Ooops.." width="50%" heigth="1em"></img>
    </div>
  );
}

export default Header;
