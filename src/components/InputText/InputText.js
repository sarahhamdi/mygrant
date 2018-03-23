import React from 'react';

const InputText = ({ extraClass, id, label, type, name, placeholder, required, pattern, handleChange, value, disabled, readOnly }) => (
  <div className={`inputtext ${extraClass}`}>
  {label ? 
    <label className={`inputtext__label`} htmlFor={id}><h3 className="header-3">{label}</h3></label>
    : null}

      <input 
        className={`inputtext__input`} 
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder} 
        pattern={pattern}
        onChange={handleChange}
        value={value}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        />

    <span className="validity"></span>
  </div>
) 

export default InputText;