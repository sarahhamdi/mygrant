import React, { Component } from 'react';
// import logo from './assets/large-logo.svg';
import axios from 'axios';
import Button from './components/Button/Button';
import InputText from './components/InputText/InputText';

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
      <div className="App">
        <Button text="a button"/>
        <InputText name="newtextform" placeholder="some placeholder text" label="a text input" id="newInputText"/>
      </div>
    );
  }
}

export default App;
