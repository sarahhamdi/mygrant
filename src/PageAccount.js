import React from 'react';
import { removeToken } from './services/tokenService';

import Header from './components/Header/Header'

const PageAccount = () => (
  <main className="page__account">
    <Header />
    <h1>your account</h1>
    <button onClick={() => removeToken()}>logout</button>
  </main>
);

export default PageAccount;