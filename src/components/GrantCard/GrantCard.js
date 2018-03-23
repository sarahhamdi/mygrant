import React from 'react';

import H3 from '../H3/H3';
import Paragraph from '../Paragraph/Paragraph';

const GrantCard = ({ id, name, issuer, tags, amount, grantlink, granted, due, status, link }) => (
  <div className="grant-card">
    <h4 className="grant-card__name">{name}</h4>
    <p className="grant-card__issuer">{issuer}</p>
    <p className="grant-card__link"><a href={link}>Grant Link</a></p>
    {tags.map(tag => (
      <div className="grant-card__tags">
      <span className="grant-card__tag">{tag}</span>
    </div>
    ))}
    <p className="grant-card__date">{due}</p>
    <p className="grant-card__status">{status}</p>
  </div>
)

export default GrantCard;



