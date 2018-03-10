import React from 'react';
import Icon from '../Icon/Icon';


const ButtonWithIcon = ({ text, action, extraClass, type }) => ( <button className={`button ${extraClass}`} onChange={() => action}><Icon type={type} />{text}</button>
)

export default ButtonWithIcon;