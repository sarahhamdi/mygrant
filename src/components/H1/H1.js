import React from 'react';

const H1 = ({ text, extraClass }) => (
  <h1 className={`header-1 ${extraClass}`}>{text}</h1>
)

export default H1;