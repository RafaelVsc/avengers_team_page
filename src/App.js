import React from 'react';
import "./App.css"
import Card from './Card';
function App() {
  return (
    <div className="contaier-page">
      <div className="team-description">
        <h1>Equipe Avengers</h1>
        <p> 
          Olá! Nós somos os Avengers, mas ao contrário do que você pode estar pensando este não é nenhum filme da Marvel, é o <label>Game Experience</label> (by Gama Academy), 
          e os desafios podem ser muito maiores do que enfrentar um <label>Titã genocida</label>. Nossa equipe é composta  por 14 integrantes, 
          sendo dividida entre 4 hipsters, 4 hustlers, 3 hypers e 3 hackers (privilegiados SIM). Escolhemos o Rafa Vescio para ser nosso "Capitão América" (que também pode ser conhecido como O Líder). 
          Logo abaixo você vai poder conhecer mais sobre nosso time… e antes que a gente se esqueça: <label>Avengers, assemble!</label>
        </p>
        <div className="meet-team">
          <h1>Quem somos</h1>
        </div>
      </div>
      <Card></Card>
    </div>
  );
}

export default App;
