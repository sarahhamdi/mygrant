import React from 'react';
import axios from 'axios';

import addLight from './assets/icon-add-light.svg';
import H2 from './components/H2/H2';
import Header from './components/Header/Header';
import ButtonWithIcon from './components/ButtonWithIcon/ButtonWithIcon';
import FormGrant from './components/FormGrant/FormGrant';
import GrantCard from './components/GrantCard/GrantCard';

class PageGrants extends React.Component {
  state = {
    grants: [],
    visible: false,
    updated: false
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

  update = () => {
    this.setState({
      updated: true
    })
    this.refresh();
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
        {this.state.visible ?
          <FormGrant name="form-grants" id="form-grants" hideForm={this.hideForm}/>
          : <React.Fragment>
              <Header />
              <section className="page__grants__container">
                <ButtonWithIcon type={addLight} text="Add a Grant" action={this.showForm} />
                <H2 text="Upcoming Grants" />
                {this.state.grants.map(grant => (
                    <GrantCard 
                      key={grant._id}
                      id={grant._id}
                      name={grant.name}
                      issuer={grant.issuer}
                      tags={grant.tags}
                      amount={grant.amount}
                      grantlink={grant.grantLink}
                      granted={grant.granted}
                      due={grant.due}
                      status={grant.status} 
                      action={this.update} />
                ))}
              </section>
            </React.Fragment>}
      </main>
    )
  }
}

export default PageGrants;