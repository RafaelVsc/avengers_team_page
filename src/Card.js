import React, { Component } from 'react';
import './assets/Main.css';

class Card extends Component {
  static get CARD_STYLE() {
    return {
      height: "600px",
      width: "600px",
      paddingTop: "80px",
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
      <div style={Card.CARD_STYLE}>
        <h1>{ participant.name }</h1>
      </div>
      );
    }
} 
export default Card;