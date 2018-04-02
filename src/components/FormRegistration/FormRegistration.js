import React from 'react';
import InputText from '../InputText/InputText'
import Button from '../Button/Button'
import axios from 'axios';

class FormRegistration extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    organization: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postNewUser = () => {
    const { firstName, lastName, email, password, organization } = this.state;
    axios
      .post('/auth/register', { firstName, lastName, email, password, organization })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { name, id } = this.props;
    return (
      <form name={name} id={id} onSubmit={this.postNewUser} className="form--registration">
        <InputText 
          type="text"
          name="firstName" 
          placeholder="Severus Snape" 
          label="Your First Name" 
          id="registration--input-name-1"
          handleChange={this.handleChange} />
        <InputText 
          type="text"
          name="lastName" 
          placeholder="Severus Snape" 
          label="Your Last Name" 
          id="registration--input-name-2"
          handleChange={this.handleChange} />
        <InputText 
          type="text"
          name="organization" 
          placeholder="The Order of the Phoenix" 
          label="Your Organization's Name" 
          id="registration--input-org-name"
          handleChange={this.handleChange} />
        <InputText 
          type="email"
          name="email" 
          placeholder="ssnape@hogwarts.edu" 
          label="Your Email" 
          pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          id="registration--input-nemail"
          handleChange={this.handleChange} />
        <InputText 
          type="password"
          name="password" 
          placeholder="30+ characters please!" 
          label="Your Password" 
          id="registration--input-password"
          required="true" 
          handleChange={this.handleChange} />
        <Button text="Create Account"/>
      </form>
    )
  }
} 

export default FormRegistration; 