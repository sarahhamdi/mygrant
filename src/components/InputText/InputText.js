import React from 'react';

const InputText = ({ extraClass, id, label, type, name, placeholder, required, pattern}) => (
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
        />
      : <input 
          className={`inputtext__input`} 
          type={type} 
          id={id} 
          name={name} 
          placeholder={placeholder} 
          pattern={pattern}
          />}

    <span className="validity"></span>
  </div>
) 

export default InputText;