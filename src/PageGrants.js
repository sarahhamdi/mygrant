import React from 'react';
import axios from 'axios';

import addLight from './assets/icon-add-light.svg';
import Header from './components/Header/Header';
import ButtonWithIcon from './components/ButtonWithIcon/ButtonWithIcon';
import FormGrant from './components/FormGrant/FormGrant';

class PageGrants extends React.Component {
  state = {
    grants: [],
    visible: false
  }

  refresh = () => {
    // axios is a promise-based api
    // so you can chain .then and use callback for response
    // make sure you on the CORRECT PORT (ie not 3000)
    // do not make a get request to a specific domain 
    // e.g.  axios.get('localhost:8080/hello')
    // because you will get a CORs error
    // AND because you may not be using that port all the time
    // use a proxy! add "proxy": "http://localhost:8080" to package.json
    axios
    .get('/grants')
    .then(res => {
      console.log(res.data.payload)
      const grants = res.data.payload;
      this.setState({
        grants
      })
    });
  }

  showForm = e => {
    e.preventDefault();
    this.setState({
      visible: true
    })
  }

  hideForm = e => {
    e.preventDefault();
    this.setState({
      visible: false
    }) 
    this.refresh();
  }
    
  componentDidMount() { 
    this.refresh();
  }


  render() {
    return (
      <main className="page__grants">
      <Header />
      <ButtonWithIcon type={addLight} text="Add a Grant" action={this.showForm} />

      {this.state.visible ?
        <FormGrant name="form-grants" id="form-grants" action={this.hideForm}/>
        : null}
      
      {this.state.grants.map(grant => (
        <div key={grant._id}>
          {grant.name}
          {grant.amount}
          {grant.grantLink}
          {grant.granted}
          {grant.due}
          {grant.status}
          {grant.tags.map(tag => (tag))}
        </div>
      ))}


    </main>
    )
  }
}




export default PageGrants;