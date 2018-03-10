import React from 'react';
import Img from '../Image/Image'

const Icon = ({ type, description }) => (
  <Img src={`${type}.svg`} extraClass={`icon`} description={`a ${type} icon`} />
)

export default Icon;