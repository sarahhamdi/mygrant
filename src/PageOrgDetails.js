import React from 'react';
import axios from 'axios';

import addLight from './assets/icon-add-light.svg';
import Header from './components/Header/Header';
import ButtonWithIcon from './components/ButtonWithIcon/ButtonWithIcon';
import FormOrgDetails from './components/FormOrgDetails/FormOrgDetails';
import OrgDetail from './components/OrgDetail/OrgDetail';

class PageOrgDetails extends React.Component {
  state = {
    details: [],
    visible: false
  }

  refresh = () => {
    axios
    .get('/org-details')
    .then(res => {
      console.log(res.data.payload)
      const details = res.data.payload;
      this.setState({
        details
      })
    });
  }

  showForm = e => {
    e.preventDefault();
    this.setState({
      visible: true
    })
  }

  hideForm = () => (
    this.setState({
      visible: false
    })
  )
  
  componentDidMount() {
    this.refresh();
  }

  render() {
    return(
      <main className="page__org-details">
        <Header />
        <ButtonWithIcon type={addLight} text="Add a Field" action={this.showForm}/>

        {this.state.visible ?
          <FormOrgDetails name="form-org-info" id="form-org-info" />
          : null }

        {this.state.details.map(detail => (
          <OrgDetail 
            key={detail._id} 
            title={detail.title}
            text={detail.text} />
        ))}
      </main>

    )
  }
}

export default PageOrgDetails;