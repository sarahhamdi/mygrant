import React from 'react';
import axios from 'axios';
import logo from './assets/large-logo.svg';
import Image from './components/Image/Image';
import FormLogin from './components/FormLogin/FormLogin';
import { setToken } from './services/tokenService';
class PageLogin extends React.Component {
  state = {
    email: '',
    password: ''
  }

  update = e => (
    this.setState({ [e.target.name]: e.target.value })
  )

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
        <FormLogin name="form-login" id="form-login" postUser={this.postUser} />
      </main>
    )
  }
}

export default PageLogin;