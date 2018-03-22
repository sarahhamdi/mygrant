import React from 'react';
import H3 from '../H3/H3';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';
import InputText from '../InputText/InputText';
import InputTextArea from '../InputTextArea/InputTextArea'

import { CopyToClipboard } from 'react-copy-to-clipboard';

class OrgDetail extends React.Component {
  state = {
    disabled: true,
    title: this.props.title,
    text: this.props.text,
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

  save = () => {
    this.setState({
      disabled: true
    })
  }

  render() {
    const { id, title, text, action } = this.props;
    return (
      <div className="org-detail">
      {this.state.disabled ?
        <React.Fragment>
          <InputText 
            extraClass="org-detail__title disabled" 
            value={this.state.title}
            key={id} 
            name="title"  />
          <InputTextArea 
            extraClass="org-detail__text disabled" 
            value={this.state.text}
            key={id}
            name="text"
             />
        </React.Fragment>
        :   <React.Fragment>
              <InputText 
                extraClass="org-detail__title editable" 
                value={this.state.title}
                key={id} 
                name="title"
                handleChange={this.handleChange} />
              <InputTextArea 
                extraClass="org-detail__text editable" 
                value={this.state.text}
                key={id} 
                name="text"
                handleChange={this.handleChange} />
            </React.Fragment>
        }

        <button className="org-detail__button" onClick={() => action(id)}>delete</button>
        
        <CopyToClipboard text={text}>
            <button className="org-detail__button">Copy Details</button>
        </CopyToClipboard>

        <button className="org-detail__button" onClick={this.edit}>edit</button>
      </div>
    )
  }
}


export default OrgDetail;
