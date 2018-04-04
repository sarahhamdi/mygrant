import React from 'react';
import axios from "axios";

import InputText from '../InputText/InputText';
import InputTextArea from '../InputTextArea/InputTextArea';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';

import { getToken } from '../../services/tokenService';

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
    notes: '',
    error: false
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postNewGrant = e => {
    const { name, issuer, amount, due, grantLink, tags, status, granted, notes } = this.state;
    const token = getToken();
    const { hideForm, refresh } = this.props;

    e.preventDefault();
    this.setState({
      tags: this.state.tags[0].split(",")
    })

    axios
      .post('/grants/new', 
        { name, issuer, amount, due, grantLink, tags, status, granted, notes },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      .then(res => {
        console.log(res)
        hideForm(e);
        refresh();
      })
      .catch(err => {
        console.log(err)
        this.setState({
          error: true
        })
      })
  }

  render() {
    const { name, id, hideForm } = this.props;
    return (
      <form name={name} id={id} className="form--grant" onSubmit={this.postNewGrant}>
      <Button text="✕ Cancel" extraClass="form--grant__close" action={hideForm} />
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
        placeholder="e.g. 30000" 
        label="Grant Amount" 
        type="number"
        id="grant-amount"
        handleChange={this.handleChange} />
      <InputText 
        name="due" 
        placeholder="yyyy-mm-dd" 
        label="Due Date" 
        type="date"
        id="grant-due"
        handleChange={this.handleChange} />
      <InputText 
        name="grantLink" 
        placeholder="e.g. http://grantlink.com" 
        label="Link to Application" 
        id="grant-link"
        handleChange={this.handleChange} />
      <InputText 
        name="tags" 
        placeholder="Comma-separated, e.g. youth, seniors" 
        label="Tags" 
        id="grant-tags"
        handleChange={this.handleChange} />
      <InputText 
        name="granted" 
        placeholder="e.g. 10000" 
        label="Amount Awarded" 
        type="number"
        id="grant-amount-granted"
        handleChange={this.handleChange} />
      <InputTextArea
        name="notes" 
        placeholder=" " 
        label="Notes" 
        id="grant-notes" 
        handleChange={this.handleChange} />
      {this.state.error ? 
        <Paragraph extraClass="error" text={`There was an error adding this grant. Please make sure <strong>Grant Amount</strong> and <strong>Amount Awarded</strong> are number values, and submit again.`} />
        : null}
      <Button text="Save" />
    </form>
    )
  }
} 

export default FormGrant;