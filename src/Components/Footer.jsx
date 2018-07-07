import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => (
  <footer className="footer">
    <Row className="justify-content-center align-items-center h-100">
      <Col xs="auto">
        <h6 className="text-white">
          Designed by{' '}
          <a href="http://602024.com/jaswanthkomaleeswaran" target="_blank">
            Jaswanth Komaleeswaran
          </a>
        </h6>
      </Col>
    </Row>
  </footer>
);

export default Footer;
