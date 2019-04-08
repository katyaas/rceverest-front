

import React from 'react';

const FeedbackItem = (props) => {
  const { data } = props;
  return (
    <div className="item">
      <div className="name">{data.name}</div>
      <div className="body">{data.body}</div>
      <style jsx>{`
        .item {
          width: 100%;
          border: 1px solid rgba(235, 235, 235, 0.5);
          margin-bottom: 10px;
        }
        .name {
          width: 100%;
          border-bottom: 1px solid rgba(235, 235, 235, 0.5);
          font-weight: bold;
          padding: 4px;
          background-color: rgba(20, 145, 255, 0.5);
        }
        .body {
          width: 100%;
          font-size: 0.9rem;
          text-indent: 20px;
          background-color: rgba(133, 195, 252, 0.5);
          padding: 5px;
        }
      `}</style>
    </div>
  )
};

export default FeedbackItem;
