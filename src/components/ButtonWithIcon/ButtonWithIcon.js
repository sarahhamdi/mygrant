import Icon from '../Icon/Icon'
import Button from '../Button/Button'
import React from 'react';

import React from 'react';

const ButtonWithIcon = ({ text, action, extraClass, icon }) => (
  <Button 
    extraclass="button--icon" 
    action={action} 
    text={<Icon 
            type={icon} 
            description={`an icon of ${icon}`} /> + {text}} />
)

export default ButtonWithIcon;