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
    id: 0,
    visible: false,
    updated: false
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
    this.setState({
      updated: false
    })
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

  hideForm = () => (
    this.setState({
      visible: false
    })
  )
  
  showDetail = (id) => {
    this.setState({
      id
    })
  }

  showAllDetails = () => {
    this.setState({
      id: 0
    })
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return(
      <main className="page__org-details">
        <Header />

        <section className="page__org-details__container">
          <ButtonWithIcon type={addLight} text="Add a Field" action={this.showForm}/>

          {/* show form */}
          {this.state.visible ?
            <FormOrgDetails name="form-org-info" id="form-org-info" />
            : null }
          
          {/* create index */}
          <ul className="org-details__index">
            <li className="org-details__index__item"><a className="org-details__index__link--1" onClick={this.showAllDetails}>View All</a></li>
            {this.state.details.map(detail => (
              <li key={detail._id} className="org-details__index__item">
                <a className="org-details__index__link" onClick={() => this.showDetail(detail._id)}>{detail.title}</a>
              </li>))}
          </ul>
          
          {/* display details */}
          {this.state.id === 0 ?
            this.state.details.map(detail => (
              <OrgDetail 
                id={detail._id} 
                key={detail._id} 
                title={detail.title}
                text={detail.text}
                action={this.update} />
              ))
            : this.state.details
                .filter(detail => detail._id === this.state.id)
                .map(detail => (
                  <OrgDetail 
                    id={detail._id} 
                    key={detail._id} 
                    title={detail.title}
                    text={detail.text}
                    action={this.update} />
                  ))}          

        </section>

      </main>

    )
  }
}

export default PageOrgDetails;



// this.state.details.map(detail => (
//   <OrgDetail 
//     key={detail._id} 
//     title={detail.title}
//     text={detail.text} />
//   ))
// : this.state.details
//     .filter(detail => detail._id === this.setState.id)
//     .map(detail => (
//       <OrgDetail 
//         key={detail._id} 
//         title={detail.title}
//         text={detail.text} />
//       ))