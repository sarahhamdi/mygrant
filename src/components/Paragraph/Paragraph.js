import React from 'react';

const P = ({ text, extraClass }) => (
  <p className={`paragraph ${extraClass}`}>{text}</p>
)

export default P;