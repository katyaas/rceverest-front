import React from 'react';

const UserCard = (props) => {
  const { fio, photo, post } = props;
  return (
    <div className="user">
      <img src={`/static/${photo}.jpg`} alt={fio} title={fio}/>
      <div className="desc">
        <div className="fio">{fio}</div>
        <div>{post}</div>
      </div>
      <style jsx>{`
        .user {
          display: flex;
          background-color: #007bff;
          padding: 10px;
          margin: 10px;
          color: white;
        }
        .desc {
          margin-left: 10px;
        }
        .fio {
          font-weight: bold;
          font-size: 1.2rem;
        }
      `}
      </style>
    </div>
  );
};

export default UserCard;
