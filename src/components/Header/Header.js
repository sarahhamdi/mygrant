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
        <li className="header__nav-list-item"><h2 className="header-3"><a href="/org-details">Org Details</a></h2></li>
        <li className="header__nav-list-item"><h2 className="header-3"><a href="/grants">Grants</a></h2></li>
        <li className="header__nav-list-item"><h2 className="header-3"><a href="/data">Data</a></h2></li>
        <li className="header__nav-list-item header__account-icon">
          <a href="/account">
            <p className="paragraph">Sarah Hamdi</p> <Icon type={person}/>
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;