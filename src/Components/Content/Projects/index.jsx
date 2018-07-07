import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import SectionTitle from '../../SectionTitle';
import SpacedButton from './SpacedButton';
import ProjectList from './ProjectList';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Fights',
    };

    this.toggleContent = this.toggleContent.bind(this);
  }

  toggleContent(event) {
    this.setState({
      content: event.target.id,
    });
  }

  render() {
    return (
      <Row id="projects">
        <Col xs="12">
          <SectionTitle title="Recent Projects" />
          <Card>
            <CardHeader className="text-center">
              <SpacedButton id="ANDROID" onClick={this.toggleContent}>
                Android
              </SpacedButton>
              <SpacedButton id="WEB DEVELOPMENT" onClick={this.toggleContent}>
                Web Application
              </SpacedButton>
            </CardHeader>
            <CardBody>
              <ProjectList content={this.state.content} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Projects;
