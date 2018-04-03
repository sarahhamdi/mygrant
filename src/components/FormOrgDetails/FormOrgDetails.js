import React from 'react';
import InputText from '../InputText/InputText'
import InputTextArea from '../InputTextArea/InputTextArea'
import Button from '../Button/Button'
import axios from "axios"
import { getToken } from '../../services/tokenService';

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
    const token = getToken();
    axios
      .post('/org-details/new', 
        { title, text },
        { headers: {
            Authorization: `Bearer ${token}`
        }})
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
        <Button text="✕ Cancel" extraClass="form--grant__close" action={hideForm} />
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
      </form>
    )
  }
}

export default FormOrgInfo;

// ({ name, id }) 