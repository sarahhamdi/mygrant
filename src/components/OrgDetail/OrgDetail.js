import React from 'react';

const OrgDetail = ({ title, text }) => (
  <div className="org-detail">
    <h3 className="header-3 org-detail__title">{title}</h3>
    <p className="paragraph org-detail__text">{text}</p>
  </div>
)

export default OrgDetail;