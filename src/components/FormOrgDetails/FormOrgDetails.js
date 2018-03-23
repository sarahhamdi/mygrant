import React from 'react';
import InputText from '../InputText/InputText'
import InputTextArea from '../InputTextArea/InputTextArea'
import Button from '../Button/Button'
import axios from "axios"

class FormOrgInfo extends React.Component {
  state = { 
    title: '',
    text: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postNewOrgDetail = () => {
    const { title, text } = this.state;
    axios
      .post('/org-details', { title, text })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { name, id } = this.props;
    return (
      <form name={name} id={id} onSubmit={this.postNewOrgDetail} className="form--org-info">
        <InputText 
          name="title" 
          placeholder=" "  
          label="Title" 
          id="newInputText"
          handleChange={this.handleChange} />
        <InputTextArea 
          name="text" 
          placeholder=" " 
          label="text" 
          id="newInputText"
          handleChange={this.handleChange} />
        <Button text="Add Org Details"/>
      </form>

    )
  }
}

export default FormOrgInfo;

// ({ name, id }) 