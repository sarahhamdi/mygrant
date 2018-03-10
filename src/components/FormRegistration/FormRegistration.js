import React from 'react';
import InputText from '../InputText/InputText'
import Button from '../Button/Button'

const FormRegistration= () => (
  <form>
    <InputText 
      name="user-name" 
      placeholder="Your Name" 
      label="Your Name" 
      id="registration--input-name"/>
    <InputText 
      name="user-org" 
      placeholder="Your Organization's Name" 
      label="Your Organization's Name" 
      id="registration--input-org-name"/>
    <InputText 
      name="Your Email" 
      placeholder="example@email.com" 
      label="Your Email" 
      id="registration--input-nemail"/>
    <InputText 
      name="user-password" 
      placeholder="*****" 
      label="Your Password" 
      id="registration--input-password"/>
    <Button text="Create Account"/>
  </form>
)

export default FormRegistration; 