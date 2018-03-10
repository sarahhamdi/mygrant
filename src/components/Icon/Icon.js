import React from 'react';
import Image from '../Image/Image'

const Icon = ({ type, description }) => (
  <Image src={type} extraClass={`icon`} description={`a ${type} icon`} />
)

export default Icon;