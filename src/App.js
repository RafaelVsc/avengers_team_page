import React from 'react';
import "./App.css"
import Carousel from './Carousel';
function App() {
  return (
    <div className="contaier-page">
      <div className="team-description">
        <h1>Equipe Avengers</h1>
        <p> Aqui é uma descrição do time - Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis rerum odit ratione explicabo molestiae eveniet. Aliquam hic, totam enim distinctio incidunt recusandae, quia nulla odit consequatur voluptate ad sit.Laudantium aut quasi voluptas dolore autem tempora, ratione similique, praesentium ipsum, dolorum adipisci impedit? Quia nobis cum natus ut sequi eos non quidem aperiam. Ducimus, non enim. Voluptate, molestiae aliquid?</p>
      </div>
      <Carousel></Carousel>
    </div>
  );
}

export default App;
