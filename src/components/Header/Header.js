import React from 'react';
import Image from '../Image/Image';
import Icon from '../Icon/Icon';
import logo from '../../assets/small-logo.svg'
import person from '../../assets/person.svg'

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-list-item header__logo">
          <Image src={logo} />
        </li>
        <li className="header__nav-list-item"><h2 className="header-3">Org Details</h2></li>
        <li className="header__nav-list-item"><h2 className="header-3">Grants</h2></li>
        <li className="header__nav-list-item"><h2 className="header-3">Data</h2></li>
        <li className="header__nav-list-item header__account-icon">
          <p className="paragraph">Sarah Hamdi</p> <Icon type={person}/>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;