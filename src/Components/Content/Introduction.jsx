import React from "react";
import { Row, Col } from "reactstrap";
import SectionTitle from "../SectionTitle";

const Introduction = () => (
  <Row className="justify-content-center p-5">
    <SectionTitle title="About Me" />
    <Col className="text-justify" xs="12">
      This is Jaswanth Komaleeswaran wrapping my final year IT in SVCE with
      special interest and experience in Web Development and Android
      Development. I am completed an internship in Informatica Business
      Solutions. I am a Chairman of CSI - SVCE Student Chapter for the academic
      year 2019 - 2020. I had built several real time applications which work
      around my skill sets (Software Engineering, DS, Algo, Web App, Mobile Dev,
      Cloud computing and DBMS).
    </Col>
  </Row>
);

export default Introduction;
