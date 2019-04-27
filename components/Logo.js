import React from 'react'

const Logo = () => (
  <div className="logoRoot">
    <div className="logo">
        <img src="/static/logo.png" alt="Эверест" />
        <div className="company-name">ЭВЕРЕСТ</div>
        <div className="subtitle">Реабилитационный центр</div>
    </div>
    <style jsx>{`
        .company-name {
          font-weight: bold;
          font-size: 2rem;
          margin-top: -27px;
        }
        .logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-right: 15px;
        }
        .subtitle {
            margin-top: -10px;
        }
        .logoRoot {
          display: flex;
          justify-content: flex-start;
        }
        @media screen and (max-width: 480px) {
          .logoRoot {
            justify-content: center;
          }
        }
      `}
    </style>
  </div>
);

export default Logo;
