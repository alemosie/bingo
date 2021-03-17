import { Container, Row, Col, Table } from 'react-bootstrap';


export const Scoring = () => {
  return (
    <Container className="Scoring-container">
      <h2>Scoring</h2>
      {/* <p><i>Horizontal, vertical, and diagonal bingo is allowed.</i></p> */}
      <Row>
        <Col>
          <Table size="sm">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-success">
                <th scope="row">First bingo</th>
                <td>5</td>
              </tr>
              <tr>
                <th scope="row">Cover all</th>
                <td>4</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <Table size="sm">
            <thead>
              <tr>
                <th scope="col">Order</th>
                <th scope="col">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-success">
                <th scope="row">First bingo</th>
                <td>5</td>
              </tr>
              <tr>
                <th scope="row">Second bingo</th>
                <td>4</td>
              </tr>
              <tr>
                <th scope="row">Third bingo</th>
                <td>3</td>
              </tr>
              <tr>
                <th scope="row">Fourth bingo</th>
                <td>2</td>
              </tr>
              <tr>
                <th scope="row">All others</th>
                <td>1</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>);
}