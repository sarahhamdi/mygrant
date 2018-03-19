import React from 'react';

import addLight from './assets/icon-add-light.svg';
import Header from './components/Header/Header';
import ButtonWithIcon from './components/ButtonWithIcon/ButtonWithIcon';
import FormOrgInfo from './components/FormOrgInfo/FormOrgInfo';

const PageOrgDetails = () => (
  <main className="page__org-details">
    <Header />
    <ButtonWithIcon type={addLight} text="Add a Field" />
    <FormOrgInfo name="form-org-info" id="form-org-info" />
    <h3 className="header-3">Organization Name</h3>
    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h3 className="header-3">Organization Description</h3>
    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </main>
);

export default PageOrgDetails;