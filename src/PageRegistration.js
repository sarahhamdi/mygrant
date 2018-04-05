import React from 'react';

import logo from './assets/large-logo.svg';
import Image from './components/Image/Image';
import InputText from './components/InputText/InputText'
import Button from './components/Button/Button'
import axios from 'axios';

class PageRegistration extends React.Component {
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

  postNewUser = e => {
    e.preventDefault();
    const { firstName, lastName, email, password, organization } = this.state;
    const { setUser } = this.props;
    axios
      .post('/auth/register', { firstName, lastName, email, password, organization })
      .then(res => {
        console.log(res)
        setUser(res);
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { name, id } = this.props;
    return (
      <main className="page__registration">
        <Image src={logo} />
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
      </main>
    )
  }

}


export default PageRegistration;