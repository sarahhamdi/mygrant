import React from 'react';

const H2 = ({ text, extraClass }) => (
  <h2 className={`header-2 ${extraClass}`}>{text}</h2>
)

export default H2;