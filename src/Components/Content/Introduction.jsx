import React from 'react';
import { Row, Col } from 'reactstrap';
import SectionTitle from '../SectionTitle';

const Introduction = () => (
  <Row className="justify-content-center p-5">
    <SectionTitle title="About Me" />
    <Col className="text-justify" xs="12">
      I, Jaswanth K,doing 2nd Year Engineering at SVCE.I am a Developer and Designer.
    </Col>
  </Row>
);

export default Introduction;
