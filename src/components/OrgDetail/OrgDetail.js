import React from 'react';
import H3 from '../H3/H3'
import Paragraph from '../Paragraph/Paragraph'

const OrgDetail = ({ title, text }) => (
  <div className="org-detail">
    <H3 extraClass="org-detail__title" text={title} />
    <Paragraph extraClass="org-detail__text" text={title} />
  </div>
)

export default OrgDetail;