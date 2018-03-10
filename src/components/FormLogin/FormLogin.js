import React from 'react';
import InputText from '../InputText/InputText'
import Button from '../Button/Button'

const FormLogin= ({ name, id }) => (
  <form name={name} id={id} method="post">
    <InputText 
      type="email"
      name="Your Email" 
      placeholder="example@email.com" 
      label="Your Email" 
      pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
      id="registration--input-nemail"/>
    <InputText 
      type="password"
      name="user-password" 
      placeholder="*******" 
      label="Your Password" 
      id="registration--input-password"
      required="true" />
    <Button text="Login"/>
  </form>
)

export default FormLogin; 