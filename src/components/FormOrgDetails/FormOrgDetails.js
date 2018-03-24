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

  postNewOrgDetail = e => {
    e.preventDefault();
    const { title, text } = this.state;
    axios
      .post('/org-details', { title, text })
      .then(res => {
        console.log(res)
        this.props.hideForm(e);
        this.props.update();
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { name, id, hideForm } = this.props;
    return (
      <form name={name} id={id} className="form--org-info" onSubmit={this.postNewOrgDetail} >
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
        <Button text="Save" />
        <Button text="Cancel" action={hideForm} />
      </form>
    )
  }
}

export default FormOrgInfo;

// ({ name, id }) 