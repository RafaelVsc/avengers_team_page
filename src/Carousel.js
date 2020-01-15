import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import Card from "./Card";
import data from "./data.json";

export default class Carousel extends Component {
  state = {
    information: []
  }

  async componentDidMount () {
    await this.setState({information: data.Team});
  }

  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "70%",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    };
  }

  nextCarousel(){
    this.Carousel.next()
  }

  render() {
    return (
      <div style={Carousel.CONTAINER_STYLE}>
        <ReactCardCarousel ref = { Carousel => this.Carousel = Carousel } autoplay={false} autoplay_speed={4000}>
          {
            this.state.information.map(participant => (
              <Card key={participant.id} participant={participant}/>
            ))
          };
        </ReactCardCarousel>
        <div>
          <button >Next</button>
        </div>
      </div>
    );
  }
}