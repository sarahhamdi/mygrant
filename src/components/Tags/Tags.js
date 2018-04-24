import React from 'react';

const Tags = ({ data, filterTags, selected }) => (
  <div className="grant__tags">
    <span className={selected === null ? `grant-card__tag--selected` : `grant-card__tag`} onClick={() => filterTags(null)}>All</span>
    {data.map(tag => 
      <span className={selected === tag ? `grant-card__tag--selected` : `grant-card__tag`} onClick={() => filterTags(tag)}>{tag}</span>)}
  </div>
)

export default Tags;