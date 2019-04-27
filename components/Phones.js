import React from 'react';

import Phone from './Phone';

const Phones = () => (
  <div className="phones">
    <div>Телефоны для связи:</div>
    <Phone>+7 (906) 198-46-47</Phone>
    <Phone>+7 (906) 199-11-88</Phone>
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
