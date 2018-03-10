import React from 'react';
import Img from '../Image/Image'

const Icon = ({ type, description }) => (
  <Img src={type} extraClass={`icon`} description={`a ${type} icon`} />
)

export default Icon;