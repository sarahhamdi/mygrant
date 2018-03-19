import React from 'react';

const InputTextArea = ({ extraClass, id, label, name, placeholder, required, disabled, length, readonly, handleChange }) => (
  <div className={`textarea ${extraClass}`}>
    <label className={`textarea__label`} htmlFor={id}><h3 className="header-3">{label}</h3></label>
    
    <textarea 
      className={`textarea__input`} 
      id={id} 
      name={name} 
      placeholder={placeholder} 
      maxLength={length} 
      spellCheck="true" 
      onChange={handleChange}
      {...disabled ? disabled : null}
      {...required ? required : null}
      {...readonly ? readonly : null}/>
  </div>
) 

export default InputTextArea;