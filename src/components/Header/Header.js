import React from 'react';
import Image from '../Image/Image';
import Icon from '../Icon/Icon';
import logo from '../../assets/large-logo.svg'
import add from '../../assets/icon-add.svg'

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <ul className="header__nav-ist">
        <li className="header__nav-list-item header__logo">
          <Image src={logo} />
        </li>
        <li className="header__nav-list-item header__nav-list-item">Org Details</li>
        <li className="header__nav-list-item">Grants</li>
        <li className="header__nav-list-item">Data</li>
        <li className="header__nav-list-item header__account-icon">
          <Icon type={add}/>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;