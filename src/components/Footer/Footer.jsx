import React, { Component } from 'react'
import './footer.css';
import { Container, Row, Col } from 'reactstrap';

export default class Footer extends Component {
  render() {
    return (
      <Container className="container-footer">
        <Row className="Row-footer">
          <Col className="Col-footer"xs="4" md>About Us</Col>
          <Col xs="4">Copyright</Col>
          <Col xs="4">FAQ-SAV</Col>
        </Row>
      </Container>
          )
        }
      }
