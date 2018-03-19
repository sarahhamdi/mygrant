import React, { Component } from 'react';

import logo from './assets/large-logo.svg';
import Image from './components/Image/Image';
import FormLogin from './components/FormLogin/FormLogin';

const PageLogin = () => (
  <main className="page__login">
    <Image src={logo} />
    <FormLogin name="form-login" id="form-login"/>
  </main>
)

export default PageLogin;