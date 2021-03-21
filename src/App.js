import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import logo from './logo.png';
import './App.css';
import { Player } from './Player.js'
import { Scoring } from './Scoring.js'


const calledNumbers = () => {
  let buttons = [];
  const onClick = (event) => {
    event.target.classList.toggle('Called-number')
  }

  for (let num = 1; num <= 75; num++) {
    buttons.push(
      <Button
        onClick={onClick}
        variant="outline-dark"
        size="sm"
        key={num}>
        {num}
      </Button>
    )
  }
  return buttons;
}

function App() {
  const [pointChange, setPointChange] = useState(0);
  const [changeRow, setChangeRow] = useState(false);

  // Figure out how many points to add from the Scoring table
  const [numPointChange, setNumPointChange] = useState(5);


  const handlePointChange = (change) => {
    setChangeRow(true);
    setPointChange(change);
  }

  return (
    <div className="App">
      <span className="App-logo-sparkles">✨</span>
      <img src={logo} className="App-logo" alt="logo" />
      <span className="App-logo-sparkles">✨</span>
      <Container className="Top-container">
        <Row>
          <Col>
            <Container>
              <h2>Called numbers</h2>
              <div id="number-list">
                {calledNumbers()}
              </div>
            </Container>
            < Scoring
              pointChange={pointChange}
              changeRow={changeRow}
              setChangeRow={setChangeRow}
              setNumPointChange={setNumPointChange}
            />
          </Col>
          <Col>
            <h2>Players</h2>
            <Row className="Player-card-container">
              <Player name='Alex' points={0} numPointChange={numPointChange} onPointChange={handlePointChange} />
              <Player name='Mike' points={0} numPointChange={numPointChange} onPointChange={handlePointChange} />
              <Player name='Rosa' points={0} numPointChange={numPointChange} onPointChange={handlePointChange} />
              <Player name='Dino' points={0} numPointChange={numPointChange} onPointChange={handlePointChange} />
              <Player name='Michele' points={0} numPointChange={numPointChange} onPointChange={handlePointChange} />
              <Player name='Frank' points={0} numPointChange={numPointChange} onPointChange={handlePointChange} />
              <Player name='Peggy' points={0} numPointChange={numPointChange} onPointChange={handlePointChange} />
              <Player name='Roslyn' points={0} numPointChange={numPointChange} onPointChange={handlePointChange} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
