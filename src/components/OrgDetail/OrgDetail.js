import React from 'react';
import H3 from '../H3/H3';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';
import InputText from '../InputText/InputText';
import InputTextArea from '../InputTextArea/InputTextArea'

import { CopyToClipboard } from 'react-copy-to-clipboard';

class OrgDetail extends React.Component {
  state = {

  }

  render() {
    const { id, title, text, action } = this.props;
    return (
      <div className="org-detail">
        <InputText 
          extraClass="org-detail__title" 
          value={title}
          id={id} disabled />

        <InputTextArea extraClass="org-detail__text" value={text} />

        <button className="org-detail__button" onClick={() => action(id)}>delete</button>
        
        <CopyToClipboard text={text}>
            <button className="org-detail__button">Copy Details</button>
        </CopyToClipboard>

        <button className="org-detail__button">edit</button>
      </div>
    )
  }
}


export default OrgDetail;
