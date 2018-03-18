import React from 'react';
import InputText from '../InputText/InputText'
import Button from '../Button/Button'

const FormRegistration= ({ name, id }) => (
  <form name={name} id={id} method="post" className="form--registration">
    <InputText 
      type="text"
      name="user-name" 
      placeholder="Severus Snape" 
      label="Your Name" 
      id="registration--input-name"/>
    <InputText 
      type="text"
      name="user-org" 
      placeholder="The Order of the Phoenix" 
      label="Your Organization's Name" 
      id="registration--input-org-name"/>
    <InputText 
      type="email"
      name="Your Email" 
      placeholder="ssnape@hogwarts.edu" 
      label="Your Email" 
      pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
      id="registration--input-nemail"/>
    <InputText 
      type="password"
      name="user-password" 
      placeholder="30+ characters please!" 
      label="Your Password" 
      id="registration--input-password"
      required="true" />
    <Button text="Create Account"/>
  </form>
)

export default FormRegistration; 