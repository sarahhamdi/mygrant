import React from 'react';
import { removeToken } from './services/tokenService';

import Header from './components/Header/Header'

const PageAccount = ({ setUser }) => {
  const logout = () => {
    removeToken();
    setUser(null);
  }

  return (
    <main className="page__account">
      <Header />
      <h1>your account</h1>
      <button onClick={logout}>logout</button>
    </main>
  )
}

export default PageAccount;