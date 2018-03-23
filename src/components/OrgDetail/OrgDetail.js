import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from "axios"

import InputText from '../InputText/InputText';
import InputTextArea from '../InputTextArea/InputTextArea';

class OrgDetail extends React.Component {
  state = {
    disabled: true,
    title: this.props.title,
    text: this.props.text,
    id: this.props.id
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  edit = () => {
    this.setState({
      disabled: false
    })
  }

  cancel = () => {
    this.setState({
      disabled: true
    })
    this.props.action();
  }

  save = () => {
    const { title, text, id } = this.state;
    this.setState({
      disabled: true
    })
    axios
      .patch('/org-details', { title, text, id })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  delete = () => {
    const { id } = this.state;
    axios
    .delete(`/org-details/${id}`)
    .then(res => {
      console.log(res.data.payload)
      this.props.action();
    });
  }

  render() {
    const { text } = this.props;
    return (
      <div className="org-detail">

      <div className="org-detail__button-container">
        <button 
            className="org-detail__button" 
            onClick={this.delete}>delete</button>
          <CopyToClipboard text={text}>
              <button className="org-detail__button">Copy To Clipboard</button>
          </CopyToClipboard>

          {this.state.disabled ? 
            <button 
            className="org-detail__button"
            onClick={this.edit}>edit</button>
            : <React.Fragment>
                <button 
                  className="org-detail__button" 
                  onClick={this.cancel}>cancel</button>
                <button 
                  className="org-detail__button" 
                  onClick={this.save}>save</button>
              </React.Fragment>}
      </div>

      {this.state.disabled ?
        <React.Fragment>
          <InputText 
            extraClass="org-detail__title disabled" 
            value={this.state.title}
            name="title" 
            readOnly />
          <InputTextArea 
            extraClass="org-detail__text disabled" 
            value={this.state.text}
            name="text"
            readOnly
             />
        </React.Fragment>
        :   <React.Fragment>
              <InputText 
                extraClass="org-detail__title editable" 
                value={this.state.title}
                name="title"
                handleChange={this.handleChange} />
              <InputTextArea 
                extraClass="org-detail__text editable" 
                value={this.state.text}
                name="text"
                handleChange={this.handleChange} />
            </React.Fragment>
        }
      </div>
    )
  }
}


export default OrgDetail;
