import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ProjectList = props => (
  <div>
    <h4> {props.content} </h4>

    {props.content === 'Fights' ? (
      <ListGroup>
        <ListGroupItem>JSON Project for Xmedia Solutions</ListGroupItem>
        <ListGroupItem>An Educational App for CSC Institution</ListGroupItem>
      </ListGroup>
    ) : (
      <ListGroup>
        <ListGroupItem>Website for GR SOlutions</ListGroupItem>
        <ListGroupItem>React Web APP</ListGroupItem>
      </ListGroup>
    )}
  </div>
);

ProjectList.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ProjectList;
