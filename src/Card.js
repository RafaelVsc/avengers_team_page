import React, { Component } from 'react';
import data from "./data"; 
import './assets/Main.css';

class Card extends Component {
	render() {
		return (
            <div className="container">
                {
					data.Team.map((team, i) => {
						return (
							<div className="card">
									<div className="card-img">
										<img src={team.photo} alt=""/>
										<div className="card-name">{team.name}</div>
									</div>
									<div className="card-description">
										<dl>
											<label></label>							
											<dt>Sonho grande:</dt>
											<dd>{team.bigDream}</dd>
											<dt>O que quero aprender:</dt>
											<dd>{team.wannaLearn}</dd>
											<dt>Eu daqui um ano...</dt>
											<dd>{team.oneYearIn}</dd>
											<dt>O que posso ensinar?</dt>
											<dd>{team.teach}</dd>
											<dt>Onde me encontrar?</dt>
											<dd><a href={team.linkedin}>meu linkedin</a></dd>
										</dl>
									</div>
							</div>
						);
					})
				}
            </div>
        );
    }
} 
export default Card;