import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import './map.css'

export default class Map extends Component {
    render() {
        return (


            <Container>
                <div className="garden">
                    <div className="background">
                        <Row>
                            <Col xs="2" className="Line">Departure</Col>
                            <Col xs="2" className="col"></Col>
                            <Col xs="2" className="path">12</Col>
                            <Col xs="2" className="path">14</Col>
                            <Col xs="2" className="path">15</Col>
                            <Col xs="2" className="col"></Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="path">1</Col>
                            <Col xs="2" className="col"></Col>
                            <Col xs="2" className="path">11</Col>
                            <Col xs="2" className="col2"></Col>
                            <Col xs="2" className="path">16</Col>
                            <Col xs="2" className="col2"></Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="path">2</Col>
                            <Col xs="2" className="col2"></Col>
                            <Col xs="2" className="path">10</Col>
                            <Col xs="2" className="col2"></Col>
                            <Col xs="2" className="path">17</Col>
                            <Col xs="2" className="col2"></Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="path">3</Col>
                            <Col xs="2" className="col"></Col>
                            <Col xs="2" className="path">9</Col>
                            <Col xs="2" className="col"></Col>
                            <Col xs="2" className="path">18</Col>
                            <Col xs="2" className="col"></Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="path">4</Col>
                            <Col xs="2" className="col2"></Col>
                            <Col xs="2" className="path">8</Col>
                            <Col xs="2" className="col2"></Col>
                            <Col xs="2" className="path">19</Col>
                            <Col xs="2" className="col2"></Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="path">5</Col>
                            <Col xs="2" className="path">6</Col>
                            <Col xs="2" className="path">7</Col>
                            <Col xs="2" className="col2"></Col>
                            <Col xs="2" className="path">20</Col>
                            <Col xs="2" className="Line">Finish</Col>

                        </Row>
                    </div>
                </div>
            </Container>
        );
    }
}