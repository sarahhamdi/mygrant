import React from 'react';

const Tags = ({ data, filterTags }) => (
  <div className="grant__tags">
    <span className={`grant-card__tag`} onClick={() => filterTags(null)}>All</span>
    {data.map(tag => 
      <span className={`grant-card__tag`} onClick={() => filterTags(tag)}>{tag}</span>)}
  </div>
)

export default Tags;