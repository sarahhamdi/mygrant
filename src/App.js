import React from 'react';
import axios from 'axios';
import { 
  BrowserRouter as Router, 
  Route,
  Redirect,
  Switch } from 'react-router-dom';
import PageGrants from './PageGrants';
import PageOrgDetails from './PageOrgDetails';
import PageRegistration from './PageRegistration';
import PageLogin from './PageLogin';
import PageData from './PageData';
import PageAccount from './PageAccount';
import { getToken } from './services/tokenService';

class App extends React.Component {

  state = {
    user: null
  }

  componentDidMount() {
    // When the app loads, try and get the current user
    this.getCurrentUser();
  }

  setUser = user => {
    this.setState({ user })
  }

  getCurrentUser = () => {
    // get user token
    const token = getToken();
    // if they have a token get their deets
    if (token) {
      axios
        .get('/users/current', {
          // Pass the token as an Authorization Header
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          // If a successful response returns, store the user in state.
          if (res.status === 200) {
            const user = res.data.payload
            this.setUser(user)
          }
        }
      )
    }
  }

  render() {
    return (
        <Router className="App">
          <React.Fragment>
            <Switch>
              <Route 
              exact path='/login' 
              render={() => (
                this.state.user ? <Redirect to="/" />
                : <PageLogin getCurrentUser={this.getCurrentUser}/>
              )} />
              <Route exact path="/register" render={() => (
                this.state.user ? <Redirect to="/" />
                : <PageRegistration setUser={this.setUser} />
              )} />
              <Route exact path='/' render={() => (
                this.state.user ? <PageOrgDetails />
                : <Redirect to="/login" />
              )} />
              <Route path='/data' render={() => (
                this.state.user ? <PageData />
                  : <Redirect to="/login" />
                )} />
              <Route path='/org-details' render={() => (
                this.state.user ? <PageOrgDetails />
                : <Redirect to="/login" />
              )} />
              <Route path='/grants' render={() => (
                this.state.user ? <PageGrants />
                : <Redirect to="/login" />
              )} />
              <Route path='/account' render={() => (
                this.state.user ? <PageAccount setUser={this.setUser} />
                : <Redirect to="/login" />
              )} />
            </Switch>
          </React.Fragment>
          
        </Router>
      )
    }
}

export default App;