import React from 'react';

import logo from './assets/large-logo.svg';
import Image from './components/Image/Image';
import FormRegistration from './components/FormRegistration/FormRegistration';

const PageRegistration = () => (
  <main className="page__registration">
    <Image src={logo} />
    <FormRegistration name="form-registration" id="form-registration"/>
  </main>
)

export default PageRegistration;