import React, { Component } from 'react';
import data from "./data"; 
import './assets/Main.css';

class Card extends Component {
  static get CARD_STYLE() {
    return {
    //   height: "600px",
	//   width: "600px",
		display: "flex",
		justifyContent: "space-around",
		padding: "70px",
		textAlign: "center",
		background: "#52C0F5",
		color: "#FFF",
		fontFamily: "sans-serif",
		fontSize: "12px",
		textTransform: "uppercase",
		borderRadius: "10px",
		boxSizing: "border-box"
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
							<dd><a href={participant.linkedin}>meu linkedin</a></dd>
						</dl>
					</div>
			</div>
      </div>
      );
        //     <div className="container">
        //         {
		// 			data.Team.map((team, i) => {
		// 				return (
		// 					<div className="card">
		// 							<div className="card-img">
		// 								<img src={team.photo} alt=""/>
		// 								<div className="avenger-name">
		// 									<div className="card-name">{team.name}</div>
		// 									<div className="card-stack">{team.stack}</div>
		// 								</div>
		// 							</div>
		// 							<div className="card-description">
		// 								<dl>
		// 									<label></label>							
		// 									<dt>Sonho grande:</dt>
		// 									<dd>{team.bigDream}</dd>
		// 									<dt>O que quero aprender:</dt>
		// 									<dd>{team.wannaLearn}</dd>
		// 									<dt>Eu daqui um ano...</dt>
		// 									<dd>{team.oneYearIn}</dd>
		// 									<dt>O que posso ensinar?</dt>
		// 									<dd>{team.teach}</dd>
		// 									<dt>Onde me encontrar?</dt>
		// 									<dd><a href={team.linkedin}>meu linkedin</a></dd>
		// 								</dl>
		// 							</div>
		// 					</div>
		// 				);
		// 			})
		// 		}
        //     </div>
        // );
    }
} 
export default Card;