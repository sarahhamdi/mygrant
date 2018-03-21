import React from 'react';
import { 
  BrowserRouter as Router, 
  Route } from 'react-router-dom';

import PageGrants from './PageGrants'
import PageOrgDetails from './PageOrgDetails'
import PageRegistration from './PageRegistration'
import PageLogin from './PageLogin'
import PageData from './PageData'
import PageAccount from './PageAccount'

const App = () => (
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
)
export default App;