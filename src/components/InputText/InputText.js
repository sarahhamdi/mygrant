import React from 'react';

const InputText = ({ extraClass, id, label, type, name, placeholder, required, pattern}) => (
  <div className={`inputext ${extraClass}`}>
    <label className={`inputext__label`} for={id} >{label}</label>
    <input className={`inputext__input`} type={type} id={id} name={name} placeholder={placeholder} required pattern={pattern} />
    <span className="validity"></span>
  </div>
) 

export default InputText;