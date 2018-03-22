import React from 'react';

// trying to make height of textarea match contents
// perhaps try this later? https://jsbin.com/qizepev/edit?html,css,js,output

// const adjustHeight = (element) => {
//   element.style.height = "1px";
//   element.style.height = (25 + element.scrollHeight) + "px";
// }

const InputTextArea = ({ extraClass, id, label, name, placeholder, required, length, readOnly, handleChange, value, defaultValue, disabled }) => (
  <div className={`textarea ${extraClass}`}>
    {label ? 
      <label className={`textarea__label`} htmlFor={id}><h3 className="header-3">{label}</h3></label>
      : null}
    
    <textarea
      className={`textarea__input`} 
      id={id} 
      name={name} 
      placeholder={placeholder} 
      maxLength={length} 
      spellCheck="true" 
      onChange={handleChange}
      value={value} 
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      />
  </div>
) 

export default InputTextArea;

