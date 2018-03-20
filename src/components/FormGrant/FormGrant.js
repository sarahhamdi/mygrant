import React from 'react';
import InputText from '../InputText/InputText'
import InputTextArea from '../InputTextArea/InputTextArea'
import Button from '../Button/Button'

class FormGrant extends React.Component {
  state = {
    name: '',
    issuer: '',
    amount: Number,
    due: '',
    grantLink: '',
    tags: '',
    status: Number,
    granted: Number,
    notes: ''
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
        name="name" 
        placeholder=" " 
        label="Grant Name" 
        id="grant-name" 
        handleChange={this.handleChange}/>
      <InputText 
        name="issuer" 
        placeholder=" " 
        label="Grant Issuer" 
        id="grant-issuer" 
        handleChange={this.handleChange} />
      <InputText 
        name="amount" 
        placeholder=" " 
        label="Grant Amount" 
        id="grant-amount"
        handleChange={this.handleChange} />
      <InputText 
        name="due" 
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
        name="tags" 
        placeholder=" " 
        label="Tags" 
        id="grant-tags"
        handleChange={this.handleChange} />
      <InputText 
        name="granted" 
        placeholder=" " 
        label="Amount Granted" 
        id="grant-amount-granted"
        handleChange={this.handleChange} />
      <InputTextArea
        name="notes" 
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