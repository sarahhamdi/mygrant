import React from 'react';
import Image from '../Image/Image';
import Icon from '../Icon/Icon';
import logo from '../../assets/small-logo.svg'
import add from '../../assets/icon-add.svg'

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-list-item header__logo">
          <Image src={logo} />
        </li>
        <li className="header__nav-list-item header__nav-list-item"><h3>Org Details</h3></li>
        <li className="header__nav-list-item"><h3>Grants</h3></li>
        <li className="header__nav-list-item"><h3>Data</h3></li>
        <li className="header__nav-list-item header__account-icon">
          <Icon type={add}/>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;