import React, { Component } from 'react';
import logo from './assets/large-logo.svg';
import add from './assets/icon-add.svg';
import addLight from './assets/icon-add-light.svg';
import axios from 'axios';
import { 
  BrowserRouter as Router, 
  Route, Link } from 'react-router-dom';

// components
import Icon from './components/Icon/Icon';
import Image from './components/Image/Image';
import Button from './components/Button/Button';
import ButtonWithIcon from './components/ButtonWithIcon/ButtonWithIcon';

import InputText from './components/InputText/InputText';
import InputTextArea from './components/InputTextArea/InputTextArea';

import H1 from './components/H1/H1';
import H2 from './components/H2/H2';
import H3 from './components/H3/H3';
import Paragraph from './components/Paragraph/Paragraph';

import Header from './components/Header/Header';
import FormLogin from './components/FormLogin/FormLogin';
import FormRegistration from './components/FormRegistration/FormRegistration';

const registration = () => (
  <main className="page__registration">
    <Image src={logo} />
    <FormRegistration name="form-registration" id="form-registration"/>
  </main>
);

const login = () => (
  <main className="page__login">
    <Image src={logo} />
    <FormLogin name="form-login" id="form-login"/>
    <a href="/registration">register here</a>
  </main>
);

const grants = () => (
  <main className="page__grants">
    <Header />
  </main>
);

const myDetails = () => (
  <main className="page__my-details">
    <Header />
  </main>
);

const data = () => (
  <main className="page__data">
    <Header />
  </main>
);

const account = () => (
  <main className="page__account">
    <Header />
  </main>
);

class App extends Component {
  // this is the optimal place to 
  // make an http request
  componentDidMount() {
    // axios is a promise-based api
    // so you can chain .then and use callback for response
    // make sure you on the CORRECT PORT (ie not 3000)
    // do not make a get request to a specific domain 
    // e.g.  axios.get('localhost:8080/hello')
    // because you will get a CORs error
    // AND because you may not be using that port all the time
    // use a proxy! add "proxy": "http://localhost:8080" to package.json
    axios
      .get('/hello')
      .then(console.log);
  }

  render() {
    return (
        <Router className="App">
          <React.Fragment>
            <Route exact path='/' component={login} />
            <Route exact path='/registration' component={registration} />
            <Route path='/grants' component={grants} />
            <Route exact path='/my-details' component={myDetails} />
            <Route exact path='/data' component={data} />
            <Route exact path='/account' component={account} />
          </React.Fragment>
        </Router>
    );
  }
}

export default App;

        // <Header />
        // <H1 text="Random Components" />
        // <Image src={logo} />
        // <H1 text="Header 1" />
        // <H2 text="Header 2" />
        // <H3 text="Header 3" />
        // <Paragraph text="Sphinx of black quartzzz, judge my vow" />
        // <Icon type={add} />
        // <Button text="a button"/>
        // <ButtonWithIcon type={addLight} text="button with icon" />
        // <InputText name="newtextform" placeholder="some placeholder text" label="a text input" id="newInputText"/>
        // <InputTextArea name="newtextform" placeholder="some placeholder text" label="a text input" id="newInputText" />

        // <H1 text="Registration Form" />
        // <FormRegistration name="form-registration" id="form-registration"/>

        // <H1 text="Login Form" />
        // <FormLogin name="form-login" id="form-login"/>