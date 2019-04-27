import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap//Row';
import Col from 'react-bootstrap/Col';

import Header from './Header'
import Logo from '../components/Logo';
import Phones from '../components/Phones';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = props => (
  <div>
    <Header />
    <Container>
      <Row style={{ marginTop: '10px' }}>
        <Col>
          <Logo />
        </Col>
        <Col>
          <Phones />
        </Col>
      </Row>
      <Row>
        {props.children}
      </Row>
    </Container>
    <style jsx global>{`
        p {
          text-indent: 20px;
          margin-bottom: 20px;
        }
        ol, ul {
          text-indent: 0;
        }
        h1, h2 {
          text-indent: 0;
          font-weight: bold;
          text-align: center;
          font-size: 1.3rem;
          margin: 30px 0 10px;
          text-transform: uppercase;
      `}
    </style>
  </div>
);

export default Layout