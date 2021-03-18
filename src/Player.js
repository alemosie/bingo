import { Card, ListGroup, Row } from 'react-bootstrap';


export const Player = (name, points) => {
  return (
    <Card className="Player-card">
      <ListGroup variant="flush">
        <ListGroup.Item className="Player-card-header">
          <h4>{name}</h4>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <span className="Change-point Subtract-point">
              -</span>
            <span className="Points">{points}</span>
            <span className="Change-point Add-point">
              +</span>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}