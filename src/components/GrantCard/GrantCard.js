import React from 'react';

import H3 from '../H3/H3';
import Paragraph from '../Paragraph/Paragraph';

class GrantCard extends React.Component {
  state = {
    status: ['Not Yet Applied', 'Applied', 'Denied', 'Granted']
  }

  render() {
    const { name, issuer, tags, amount, grantlink, due, status } = this.props;
    return (
      <React.Fragment>
      <div className="grant-card">
        <H3 extraClass="grant-card__name" text={name} />
        <Paragraph extraClass="grant-card__issuer" text={issuer} />
        <Paragraph extraClass="grant-card__link" text={<a href={grantlink} target="_blank">Grant Link</a>} />
        <div className="grant-card__tags">
          {tags.map(tag => (
            <span className="grant-card__tag">{tag}</span>
          ))}
        </div>
        <span className="grant-card__amount">{amount}</span>
        <Paragraph extraClass="grant-card__date" text={due} />
        <Paragraph extraClass="grant-card__status" text={this.state.status[status - 1]} />
      </div>
      <div className="grant-card__buttons">
        <button 
          className="grant-card__button" 
          onClick={this.delete}>delete</button>
        <button 
          className="grant-card__button" 
          onClick={this.save}>edit</button>
      </div>
      </React.Fragment>
    )
  }
}

export default GrantCard;




