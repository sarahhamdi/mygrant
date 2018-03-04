import React from 'react';

const Button = ({ text, action, extraClass }) => (
  <button className={`button ${extraClass}`} onChange={() => action}>{text}</button>
)

export default Button;