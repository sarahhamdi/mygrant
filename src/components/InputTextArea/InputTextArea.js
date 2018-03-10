import React from 'react';

const InputTextArea = ({ extraClass, id, label, name, placeholder, required, disabled, length, readonly }) => (
  <div className={`textarea ${extraClass}`}>
    <label className={`textarea__label`} htmlFor={id} >{label}</label>
    <textarea 
      className={`textarea__input`} 
      id={id} 
      name={name} 
      placeholder={placeholder} 
      maxLength={length} 
      spellCheck="true" 
      required 
      disabled 
      readOnly />
  </div>
) 

export default InputTextArea;