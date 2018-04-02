import React from 'react';
import axios from 'axios';
import logo from './assets/large-logo.svg';
import Image from './components/Image/Image';
import InputText from './components/InputText/InputText';
import Button from './components/Button/Button';
import { Link } from 'react-router-dom';
import { setToken } from './services/tokenService';
class PageLogin extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postUser = e => {
    e.preventDefault();
    const { email, password } = this.state;
    axios
      .post('/auth/login', {
        email, 
        password
      })
      .then(res => {
        if (res.status === 200) {
          console.log(res)
          const token = res.data.payload;
          setToken(token);
          this.props.getCurrentUser();
        }
      }
    )
  }
  
  render() {
   return (
      <main className="page__login">
        <Image src={logo} />
        <form className="form--login" onSubmit={this.postUser}>
          <InputText 
            type="email"
            name="email" 
            placeholder="example@email.com" 
            label="Your Email" 
            // pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            id="registration--input-nemail"
            handleChange={this.handleChange} />
          <InputText 
            type="password"
            name="password" 
            placeholder="*******" 
            label="Your Password" 
            id="registration--input-password"
            required="true" 
            handleChange={this.handleChange} />
          <Button text="Login"/>
          <p className="paragraph paragraph--right"><Link to={"/register"}>Not registered? Register here.</Link></p>
        </form>
      </main>
    )
  }
}

export default PageLogin;