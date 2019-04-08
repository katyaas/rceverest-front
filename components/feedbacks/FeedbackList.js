import React from 'react';

import FeedbackItem from './FeedbackItem';
import list from './data';

const FeedbackList = () => {
  return (
    <div>
      <div className="title">Отзывы о нас</div>
      {
        list.map(item => <FeedbackItem data={item} />)
      }
      <style jsx>{`
        .title {
          width: 100%;
          background-color: #1491ff;
          border: 1px solid rgba(235, 235, 235, 0.5);
          font-size: 20px;
          padding: 5px;
          margin-bottom: 10px;
          text-align: center;
        }
      `}</style>
    </div>
  )
};

export default FeedbackList;
