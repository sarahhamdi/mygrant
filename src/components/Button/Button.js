import React from 'react';

const Button = ({ text, action, extraClass }) => (
  <button className={`button ${extraClass}`} onClick={action}>{text}</button>
)

export default Button;