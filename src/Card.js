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
									<img src={team.photo} alt=""/>
									<dl>
										<dt>Nome:</dt>
										<dd>{team.name}</dd>								
										<dt>Grande sonho:</dt>
										<dd>{team.bigDream}</dd>
										<dt>Eu daqui um ano...</dt>
										<dd>{team.oneYearIn}</dd>
										<dt>O que posso ensinar?</dt>
										<dd>{team.teach}</dd>
										<dt>Onde me encontrar?</dt>
										<dd><a href={team.linkedin}>meu linkedin</a></dd>
									</dl>
							</div>
						);
					})
				}
            </div>
        );
    }
} 
export default Card;