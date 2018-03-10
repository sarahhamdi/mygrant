import React from 'react';

const InputText = ({ extraClass, id, label, type, name, placeholder, required, pattern}) => (
  <div className={`inputext ${extraClass}`}>
    <label className={`inputext__label`} htmlFor={id}>{label}</label>

    {required ? 
      <input 
        className={`inputext__input`} 
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder} 
        pattern={pattern}
        required
        />
      : <input 
          className={`inputext__input`} 
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