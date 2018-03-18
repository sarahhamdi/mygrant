import React, { Component } from 'react';
import InputText from '../InputText/InputText'
import InputTextArea from '../InputTextArea/InputTextArea'
import Button from '../Button/Button'

const FormGrant = ({ name, id }) => (
  <form name={name} id={id} method="post" className="form--grant">
    <InputText 
      name="grant-name" 
      placeholder=" " 
      label="Grant Name" 
      id="grant-name"/>
    <InputText 
      name="grant-issuer" 
      placeholder=" " 
      label="Grant Issuer" 
      id="grant-issuer" />
    <InputText 
      name="grant-amount" 
      placeholder=" " 
      label="Grant Amount" 
      id="grant-amount" />
    <InputText 
      name="grant-due" 
      placeholder=" " 
      label="Due Date" 
      id="grant-due" />
    <InputText 
      name="grant-link" 
      placeholder=" " 
      label="Link to Application" 
      id="grant-link" />
    <InputText 
      name="grant-tags" 
      placeholder=" " 
      label="Tags" 
      id="grant-tags" />
    <InputText 
      name="grant-amount-granted" 
      placeholder=" " 
      label="Amount Granted" 
      id="grant-amount-granted" />
    <InputTextArea
      name="grant-notes" 
      placeholder=" " 
      label="Notes" 
      id="grant-notes" />
    <Button text="Add Grant"/>
  </form>
)

export default FormGrant;