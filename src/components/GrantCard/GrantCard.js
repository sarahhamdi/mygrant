import React from 'react';
import axios from "axios"

import H3 from '../H3/H3';
import Paragraph from '../Paragraph/Paragraph';

class GrantCard extends React.Component {
  state = {
    status: ['Not Yet Applied', 'Applied', 'Denied', 'Granted'],
    id: this.props.id
  }

  delete = () => {
    const { id } = this.state;
    axios
    .delete(`/grants/delete/${id}`)
    .then(res => {
      console.log(res.data.payload)
      this.props.action();
    });
  }
 
  formatLargeNumbers = (n) => {

    console.log(n.toLocaleString())    
 
  }

  render() {
    const { name, issuer, tags, amount, grantlink, due, status } = this.props;
    return (
      <React.Fragment>
      <div className="grant-card">
        <H3 extraClass="grant-card__name" text={name} />
        <Paragraph extraClass="grant-card__issuer" text={issuer} />
        {/* <Paragraph extraClass="grant-card__link" text={<a href={grantlink} target="_blank">Grant Link</a>} /> */}
        <div className="grant-card__tags">
          {tags.map(tag => (
            <span className="grant-card__tag">{tag}</span>
          ))}
        </div>
        {/* uses toLocalString() to format money by locale */}
        <span className="grant-card__amount">{amount.toLocaleString('en-CA', { style: 'currency', currency: 'CAD'})}</span>
        <Paragraph extraClass="grant-card__status" text={this.state.status[status - 1]} />
        <Paragraph extraClass="grant-card__date" text={due} />
      </div>
      <div className="grant-card__buttons">
        <button 
          className="grant-card__button" 
          onClick={this.delete}>delete</button>
        <button 
          className="grant-card__button" 
          onClick={this.save}>view</button>
      </div>
      </React.Fragment>
    )
  }
}

export default GrantCard;




