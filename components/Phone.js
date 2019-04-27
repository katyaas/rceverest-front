import React from 'react';

const Phone = (props) => (
    <div className="phone">
      {props.children}
        <style jsx>{`
        .phone {
          white-space: nowrap;
        }
      `}
        </style>
    </div>
);

export default Phone;
