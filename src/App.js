import React, { Component } from 'react';
import axios from 'axios';
import { 
  BrowserRouter as Router, 
  Route } from 'react-router-dom';

import PageGrants from './PageGrants'
import PageOrgDetails from './PageOrgDetails'
import PageRegistration from './PageRegistration'
import PageLogin from './PageLogin'
import PageData from './PageData'
import PageAccount from './PageAccount'

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
            <Route exact path='/' component={PageLogin} />
            <Route path='/login' component={PageLogin} />
            <Route path='/register' component={PageRegistration} />
            <Route path='/grants' component={PageGrants} />
            <Route path='/org-details' component={PageOrgDetails} />
            <Route path='/data' component={PageData} />
            <Route path='/account' component={PageAccount} />
          </React.Fragment>
        </Router>
    );
  }
}

export default App;