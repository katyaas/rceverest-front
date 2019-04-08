import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap//Row';
import Col from 'react-bootstrap//Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Phones from '../components/Phones';
import FeedbackList from "../components/feedbacks/FeedbackList";
import Approach from "../components/Approach";
import Main from "../components/Main";

export default function Blog() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <Logo />
          </Col>
          <Col>
            <Phones />
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Approach />
            <Main />
          </Col>
          <Col>
            <FeedbackList />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}