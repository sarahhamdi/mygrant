import React from 'react';

const H3 = ({ text, extraClass }) => (
  <h3 className={`header-3 ${extraClass}`}>{text}</h3>
)

export default H3;