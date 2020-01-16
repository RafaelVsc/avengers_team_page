import React, { Component } from 'react';
import './assets/Main.css';

class Card extends Component {
  static get CARD_STYLE() {
    return {
		display: "flex",
		justifyContent: "space-around",
		background: "rgba(20, 78, 153, 0.6)",
		borderRadius: 10,
	};
}

	render() {
    const { participant } = this.props
		return (
      <div className='dad-container' style={Card.CARD_STYLE}>
				<div className="container">
					<div className="card-img">
						<img src={participant.photo} alt=""/>
						<div className="avenger-name">
							<div className="card-name">{participant.name}</div>
							<div className="card-stack">{participant.stack}</div>
						</div>
					</div>
					<div className="card-description">
						<dl>
							<label></label>							
							<dt>Sonho grande:</dt>
							<dd>{participant.bigDream}</dd>
							<dt>O que quero aprender:</dt>
							<dd>{participant.wannaLearn}</dd>
							<dt>Eu daqui um ano...</dt>
							<dd>{participant.oneYearIn}</dd>
							<dt>O que posso ensinar?</dt>
							<dd>{participant.teach}</dd>
							<dt>Onde me encontrar?</dt>
							<dd><a href={participant.linkedin} target="blank">linkedin</a></dd>
						</dl>
					</div>
			</div>
      </div>
      );
    }
} 
export default Card;