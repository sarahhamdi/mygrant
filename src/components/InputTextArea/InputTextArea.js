import React from 'react';

const InputTextArea = ({ extraClass, id, label, name, placeholder, required, disabled, length, readonly }) => (
  <div className={`textarea ${extraClass}`}>
    <label className={`textarea__label`} for={id} >{label}</label>
    <textarea className={`textarea__input`} id={id} name={name} placeholder={placeholder} maxlength={length} spellcheck="true" required disabled readonly />
  </div>
) 

export default InputTextArea;