import React from "react";
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/Layout';

const videos = [
  {
    title: '1. Эмоциональные особенности зависимости',
    id: '7pkHzpMJe2c',
  },
  {
    title: '2. Маски и роли',
    id: 'GQP7c73tKQ4',
  },
  {
    title: '3. Дифункциональная семья',
    id: '03OeBEfbJXA',
  },
  {
    title: '4. Зависимость и насилие',
    id: 'evoL1PqhXsg',
  },
  {
    title: '5. Процесс переживания утраты',
    id: 'WL_6M8Jk-Es',
  },
  {
    title: '6. Секс и трезвость',
    id: '-AjmyR30oMs',
  },
  {
    title: '7. Зависимость и созависимость как болезни',
    id: 'n_bh9vJZcn4',
  },
  {
    title: '8. Потребности',
    id: '25gOxkR5ER0',
  },
  {
    title: '9. Концепция болезни',
    id: '69VKh7gCZ8k',
  },
];

export default function Lectures() {
  return (
    <Layout>
      <Col>
        <h1>Видео лекции</h1>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          {
            videos.map(video => (
              <div style={{
                width: '45%',
                margin: '0 5px',
              }}>
                <h6>{video.title}</h6>
                <YouTube
                  videoId={video.id}
                  opts={{
                    width: '100%',
                  }}
                />
              </div>
            ))
          }
        </div>
      </Col>
    </Layout>
  )
}