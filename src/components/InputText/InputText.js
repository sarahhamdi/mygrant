import React from 'react';

const InputText = ({ extraClass, id, label, type, name, placeholder, required, pattern, handleChange }) => (
  <div className={`inputtext ${extraClass}`}>
    <label className={`header-3 inputtext__label`} htmlFor={id}>{label}</label>

    {required ? 
      <input 
        className={`inputtext__input`} 
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder} 
        pattern={pattern}
        required
        onChange={handleChange}
        />
      : <input 
          className={`inputtext__input`} 
          type={type} 
          id={id} 
          name={name} 
          placeholder={placeholder} 
          pattern={pattern}
          onChange={handleChange}
          />}

    <span className="validity"></span>
  </div>
) 

export default InputText;