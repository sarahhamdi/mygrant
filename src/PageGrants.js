import React from 'react';

import addLight from './assets/icon-add-light.svg';
import Header from './components/Header/Header';
import ButtonWithIcon from './components/ButtonWithIcon/ButtonWithIcon';
import FormGrant from './components/FormGrant/FormGrant';

const PageGrants = () => (
  <main className="page__grants">
    <Header />
    <ButtonWithIcon type={addLight} text="Add a Grant" />
    <FormGrant name="form-grants" id="form-grants" />
  </main>
);

export default PageGrants;