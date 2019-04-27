import React from "react";
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/Layout';
import FeedbackList from "../components/feedbacks/FeedbackList";
import Approach from "../components/Approach";
import Main from "../components/Main";

export default function MainPage() {
  return (
    <Layout>
      <Col lg={8}>
        <Approach />
        <Main />
      </Col>
      <Col>
        <FeedbackList />
      </Col>
    </Layout>
  )
}