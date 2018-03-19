import React from 'react';
import InputText from '../InputText/InputText'
import InputTextArea from '../InputTextArea/InputTextArea'
import Button from '../Button/Button'

class FormGrant extends React.Component {
  constructor() {
    super();
    this.state = {
      grantName: '',
      grantIssuer: '',
      grantAmount: '',
      grantDue: '',
      grantLink: '',
      grantTags: '',
      grantAmountGranted: '',
      grantNotes: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, id } = this.props;
    return (
      <form name={name} id={id} method="post" className="form--grant">
      <InputText 
        name="grantName" 
        placeholder=" " 
        label="Grant Name" 
        id="grant-name" 
        handleChange={this.handleChange}/>
      <InputText 
        name="grantIssuer" 
        placeholder=" " 
        label="Grant Issuer" 
        id="grant-issuer" 
        handleChange={this.handleChange} />
      <InputText 
        name="grantAmount" 
        placeholder=" " 
        label="Grant Amount" 
        id="grant-amount"
        handleChange={this.handleChange} />
      <InputText 
        name="grantDue" 
        placeholder=" " 
        label="Due Date" 
        id="grant-due"
        handleChange={this.handleChange} />
      <InputText 
        name="grantLink" 
        placeholder=" " 
        label="Link to Application" 
        id="grant-link"
        handleChange={this.handleChange} />
      <InputText 
        name="grantTags" 
        placeholder=" " 
        label="Tags" 
        id="grant-tags"
        handleChange={this.handleChange} />
      <InputText 
        name="grantAmountGranted" 
        placeholder=" " 
        label="Amount Granted" 
        id="grant-amount-granted"
        handleChange={this.handleChange} />
      <InputTextArea
        name="grantNotes" 
        placeholder=" " 
        label="Notes" 
        id="grant-notes" 
        handleChange={this.handleChange} />
      <Button text="Add Grant"/>
    </form>
    )
  }
} 

export default FormGrant;