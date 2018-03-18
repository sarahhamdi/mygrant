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
        <li className="header__nav-list-item header__nav-list-item"><h2 className="header-3">Org Details</h2></li>
        <li className="header__nav-list-item"><h2 className="header-3">Grants</h2></li>
        <li className="header__nav-list-item"><h2 className="header-3">Data</h2></li>
        <li className="header__nav-list-item header__account-icon">
          <Icon type={add}/>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;