import React from 'react';
import InputText from '../InputText/InputText'
import InputTextArea from '../InputTextArea/InputTextArea'
import Button from '../Button/Button'

class FormOrgInfo extends React.Component {
  state = { 
    title: '',
    description: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, id } = this.props;
    return (
      <form name={name} id={id} method="post" className="form--org-info">
        <InputText 
          name="title" 
          placeholder=" "  
          label="Title" 
          id="newInputText"
          handleChange={this.handleChange} />
        <InputTextArea 
          name="description" 
          placeholder=" " 
          label="Description" 
          id="newInputText"
          handleChange={this.handleChange} />
        <Button text="Add Org Details"/>
      </form>

    )
  }
}

export default FormOrgInfo;

// ({ name, id }) 