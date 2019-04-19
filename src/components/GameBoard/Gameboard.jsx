import React, { Component } from 'react'
import { Container } from 'reactstrap';
import Map from './Map/Map';
import InfoAvatar from './Info/InfoAvatar'; 
import './gameboard.css'

export default class Gameboard extends Component {
  render() {
    return (
      <div>
        <Container className ="Grand">
          <InfoAvatar />
          <Map />
        </Container>
       
        
      </div>
    )
  }
}
