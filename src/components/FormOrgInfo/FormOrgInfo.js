import React, { Component } from 'react';
import InputText from '../InputText/InputText'
import InputTextArea from '../InputTextArea/InputTextArea'
import Button from '../Button/Button'

const FormOrgInfo = ({ name, id }) => (
  <form name={name} id={id} method="post" className="form--org-info">
  <InputText 
    name="newinput" 
    placeholder=" " 
    label="Title" 
    id="newInputText"/>
  <InputTextArea 
    name="newtextarea" 
    placeholder=" " 
    label="Description" 
    id="newInputText" />
  <Button text="Add Org Details"/>
</form>
)

export default FormOrgInfo;