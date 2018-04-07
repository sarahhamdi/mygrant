import React from 'react';
import Image from '../Image/Image';
import Icon from '../Icon/Icon';
import logo from '../../assets/small-logo.svg';
import person from '../../assets/person.svg';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-list-item header__logo">
          <Image src={logo} />
        </li>
        <li className="header__nav-list-item"><h2 className="header-3"><Link to={"/org-details"}>Org Details</Link></h2></li>
        <li className="header__nav-list-item"><h2 className="header-3"><Link to={"/grants"}>Grants</Link></h2></li>
        <li className="header__nav-list-item"><h2 className="header-3"><Link to={"/account"}>My Account</Link></h2></li>
      </ul>
    </nav>
  </header>
)

export default Header;