import { useState } from 'react';
import { Card, ListGroup, Row } from 'react-bootstrap';

export const Player = (props) => {
  const { name, numPointChange, onPointChange } = props;
  const [pointTotal, setPointTotal] = useState(0);

  const targetOnClick = (event) => {
    const change = Number(event.target.getAttribute('change'));
    onPointChange(change);
    const pointsToChange = numPointChange * change;

    // Adjust the points
    setPointTotal(pointTotal + pointsToChange);
  }

  return (
    <Card className="Player-card">
      <ListGroup variant="flush">
        <ListGroup.Item className="Player-card-header">
          <h4>{name}</h4>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <span
              onClick={targetOnClick}
              change={-1}
              className="Change-point Subtract-point">
              -
            </span>
            <span
              className="Points">{pointTotal}</span>
            <span
              onClick={targetOnClick}
              change={1}
              className="Change-point Add-point">
              +
            </span>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}