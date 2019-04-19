import React, { Component } from 'react';
import './case.css';
import Axios from 'axios';
import { Modal, ModalBody } from 'reactstrap';
const eggsApi = 'http://easteregg.wildcodeschool.fr/api/eggs/random';;
export default class Case extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eggs: [],
      isAdded: false,
      modal: false
    };
  }

  componentDidMount() {
    this.makeApiCall();
  }

  componentWillReceiveProps(nextProps) {
    const { isOnCase, eggsCount, addEggToBasket, addEggToBasketEggs } = this.props;
    if (isOnCase && eggsCount >= 1 && !this.state.isAdded) {
      addEggToBasket(this.state.eggs.length);
      addEggToBasketEggs(this.state.eggs);
      this.setState({ isAdded: true, modal: true });
    }
  }


  makeApiCall = async () => {
    let eggs = this.state.eggs;
    for (let i = 0; i <= this.props.eggsCount; i++) {
      const response = await Axios.get(eggsApi);
      eggs.push(response.data);
    }
    this.setState({ eggs });
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    const { caseNumb, isOnCase, eggsCount, addEggToBasket } = this.props;
    return (
      <div className={`case-${caseNumb}`}>
        <p>{caseNumb}</p>
        {
          isOnCase &&
          <div className="player"></div>
        }
      </div>
    );
  }
}
