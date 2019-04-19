import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import Case from '../../Case/Case';
import './map.css'

const cases = [
    0, 1, 2, 0, 1, 2,
    0, 1, 2, 0, 1, 2,
    0, 1, 2, 0, 1, 2,
    0, 1, 2, 0, 1, 2,
    0, 1, 2, 0, 1, 2,
    0, 1, 2, 0, 1, 2,
]

export default class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {
            diceValue: 1,
            currentPlayerCase: 0,
            basket: 0,
            basketEggs: []
        }

        this.addEggToBasket = this.addEggToBasket.bind(this)
        this.addEggToBasketEggs = this.addEggToBasketEggs.bind(this)
    }

    addEggToBasket = (eggCount) => {
        this.setState((prevState) => {
            return { basket: prevState.basket + eggCount }
        })
    }
    addEggToBasketEggs = (eggs) => {
        this.setState({ basketEggs: [...this.state.basketEggs, ...eggs] })
    }

    render() {
        return (
            <div>
                <Container className="cases-container">
                    <h1>Panier : {this.state.basket}</h1>
                    <div className="basket">
                        {
                            this.state.basketEggs.map((egg, idx) => {
                                return (
                                    <div key={egg.id + idx}>
                                        <img src={egg.image} width="100px" />
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="cases-grid">
                        {
                            cases.map((eggsCount, idx) => {
                                return <Case
                                    addEggToBasket={this.addEggToBasket}
                                    addEggToBasketEggs={this.addEggToBasketEggs}
                                    isOnCase={this.state.currentPlayerCase === idx}
                                    key={idx}
                                    eggsCount={eggsCount}
                                    caseNumb={idx + 1} />
                            })
                        }
                    </div>
                </Container>
                <Button
                    onClick={() => {
                        let randomDice = Math.floor(Math.random() * 7)
                        randomDice = randomDice >= 1 ? randomDice : 1
                        const nextPosition = this.state.currentPlayerCase + randomDice
                        if (nextPosition >= cases.length) {
                            this.setState({ currentPlayerCase: (cases.length - 1) })
                        } else {
                            this.setState({ currentPlayerCase: this.state.currentPlayerCase + randomDice })
                        }

                    }}
                >Lunch dice</Button>
            </div>
        );
    }
}