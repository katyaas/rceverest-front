import React from 'react'

const Certificate = (props) => {
  const {name, title} = props;
  return (
    <div className="certificate">
      <img src={`/static/${name}.jpg`} alt={title} title={title}/>
      <style jsx>{`
        .certificate {
          margin: 5px;
        }
        .certificate img {
          width: 300px;
        }
    ` }
      </style>
    </div>
  );
};

export default Certificate;
