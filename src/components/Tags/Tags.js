import React from 'react';

const Tags = ({ data, action }) => (
  <div className="grant-card__tags">
    {data.map(tag => 
      <span className={`grant-card__tag`} onClick={() => action(tag)}>{tag}</span>)}
  </div>
)

export default Tags;