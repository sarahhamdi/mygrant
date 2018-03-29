import React from 'react';
import InputText from '../InputText/InputText';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const FormLogin= ({ name, id, action }) => (
  <form name={name} id={id} method="post" className="form--login" onSubmit={() => action()}>
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
    <p className="paragraph paragraph--right"><Link to={"/register"}>Not registered? Register here.</Link></p>
  </form>
)

export default FormLogin; 