import logo from './logo.png';
import './App.css';
import { Player } from './Player.js'
import { Scoring } from './Scoring.js'

import { Container, Row, Col, Button } from 'react-bootstrap';

const calledNumbers = () => {
  let buttons = [];
  for (let num = 1; num <= 75; num++) {
    buttons.push(<Button variant="outline-dark" size="sm" key={num}>{num}</Button>)
  }
  return buttons;
}

function App() {
  return (
    <div className="App">
      <span className="App-logo-sparkles">✨</span>
      <img src={logo} className="App-logo" alt="logo" />
      <span className="App-logo-sparkles">✨</span>
      <Container>
        <Row>
          <Col>
            <Container>
              <h2>Called numbers</h2>
              <div id="number-list">
                {calledNumbers()}
              </div>
            </Container>
            {Scoring()}
          </Col>
          <Col>
            <h2>Players</h2>
            <Row>
              {Player('Alex', 1)}
              {Player('Mike', 1)}
              {Player('Rosa', 1)}
              {Player('Dino', 1)}
              {Player('Michele', 1)}
              {Player('Frank', 1)}
              {Player('Peggy', 1)}
              {Player('Roslyn', 1)}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
