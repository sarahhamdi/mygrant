import React from 'react';

const InputText = ({ extraClass, id, label, name, placeholder }) => (
  <div className={`inputext ${extraClass}`}>
    <label for={id}>{label}</label>
    <input type="text" id={id} name={name} placeholder={placeholder}/>
  </div>
) 

export default InputText;

