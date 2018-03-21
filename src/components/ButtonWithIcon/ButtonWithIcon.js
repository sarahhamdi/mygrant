import React from 'react';
import Icon from '../Icon/Icon';


const ButtonWithIcon = ({ text, action, extraClass, type }) => ( 
  extraClass ? 
  <button className={`button button---icon ${extraClass}`} onClick={action}><Icon type={type} />{text}</button>
  : <button className={`button button--icon`} onClick={action}><Icon type={type} />{text}</button>
  
)

export default ButtonWithIcon;