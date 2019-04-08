import React from 'react'

const Approach = () => (
  <div>
    <div className="inner">
      <div className="title">
        Наш подход к реабилитации
      </div>
      <div>
        <ul>
          <li>
            В основе реабилитация Миннесотская модель с концепцией «12 шагов»
          </li>
          <li>
            Работа с немотивированнами пациентами
          </li>
          <li>
            Свежий воздух поможет забыть городскую суету
          </li>
        </ul>
      </div>
      <img className="hands" src="/static/background3.png" />
    </div>
    <style jsx>{`
        .inner {
          border: 10px solid rgba(194, 194, 194, 0.3);
          background-color: rgba(255, 255, 255, 0.3);
          max-width: 300px;
          white-space: pre-line;
          word-break: break-word;
          position: relative;
          margin-bottom: 100px;
        }
        .hands {
          position: absolute;
          bottom: -100px;
          right: -540px;
          width: 700px;
        }
      `}
    </style>
  </div>
);

export default Approach;
