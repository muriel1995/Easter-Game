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
                            <Col xs="2" id = "departure" className="Line">Departure</Col>
                            <Col xs="2" className="col"></Col>
                            <Col xs="2" id ="12" className="path">12</Col>
                            <Col xs="2" id ="14" className="path">14</Col>
                            <Col xs="2" id = "15" className="path">15</Col>
                            <Col xs="2" className="col"></Col>
                        </Row>
                        <Row>
                            <Col xs="2" id ="1" className="path">1</Col>
                            <Col xs="2" className="col"></Col>
                            <Col xs="2" id ="11" className="path">11</Col>
                            <Col xs="2" className="col2"></Col>
                            <Col xs="2" id ="16" className="path">16</Col>
                            <Col xs="2" className="col2"></Col>
                        </Row>
                        <Row>
                            <Col xs="2" id="2" className="path">2</Col>
                            <Col xs="2" className="col2"></Col>
                            <Col xs="2" id ="10" className="path">10</Col>
                            <Col xs="2" className="col2"></Col>
                            <Col xs="2" id ="17" className="path">17</Col>
                            <Col xs="2" className="col2"></Col>
                        </Row>
                        <Row>
                            <Col xs="2" id ="3"className="path">3</Col>
                            <Col xs="2" className="col"></Col>
                            <Col xs="2" id ="9" className="path">9</Col>
                            <Col xs="2" className="col"></Col>
                            <Col xs="2" id ="18" className="path">18</Col>
                            <Col xs="2" className="col"></Col>
                        </Row>
                        <Row>
                            <Col xs="2" id ="4" className="path">4</Col>
                            <Col xs="2" className="col2"></Col>
                            <Col xs="2" id ="8" className="path">8</Col>
                            <Col xs="2" className="col2"></Col>
                            <Col xs="2" id ="19" className="path">19</Col>
                            <Col xs="2" className="col2"></Col>
                        </Row>
                        <Row>
                            <Col xs="2" id ="5" className="path">5</Col>
                            <Col xs="2" id ="6" className="path">6</Col>
                            <Col xs="2" id ="7" className="path">7</Col>
                            <Col xs="2" className="col2"></Col>
                            <Col xs="2" id ="20"className="path">20</Col>
                            <Col xs="2" id ="finish" className="Line">Finish</Col>

                        </Row>
                    </div>
                </div>
            </Container>
        );
    }
}