import React from 'react';

const Phones = () => (
  <div className="phones">
    <div>Телефоны для связи:</div>
    <div>
        +79061984647
    </div>
    <div>
        +79061991188
    </div>
    <style jsx>{`
        .phones {
          font-weight: bold;
          color: white;
          font-size: 1.3rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding-right: 15px;
          text-align: right;
        }
      `}
    </style>
  </div>
);

export default Phones;
