import { Card, ListGroup, Row } from 'react-bootstrap';


export const Player = (name, points) => {
  return (
    <Card className="Player-card">
      <ListGroup variant="flush">
        <ListGroup.Item><h4>{name}</h4></ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <div className="Change-point Subtract-point">
            </div>
            {points}
            <div className="Change-point Add-point">
            </div>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}