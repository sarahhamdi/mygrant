import React from 'react';

const Image = ({ src, extraClass, description }) => (
  <img src={src} className={`img ${extraClass}`} alt={description}/>
)

export default Image;