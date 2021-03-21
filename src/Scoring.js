import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';


export const Scoring = (props) => {
  const { pointChange, changeRow, setChangeRow } = props;
  const bingoTypeTableRef = useRef(null);
  const bingoValueTableRef = useRef(null);


  const [changeBingoType, setChangeBingoType] = useState(true);

  // Index of current row in bingoTypeTable
  const [currentBingoTypeRowIndex, setCurrentBingoTypeRowIndex] = useState(0);
  // Index of current row in bingoValueTable
  const [currentBingoValueRowIndex, setCurrentBingoValueRowIndex] = useState(0);

  useEffect(() => {
    if (changeRow && changeBingoType) {
      changeCurrentRow({
        table: bingoTypeTableRef.current,
        currentIndex: currentBingoTypeRowIndex,
        setIndex: setCurrentBingoTypeRowIndex,
      });
    }
    if (changeRow) {
      changeCurrentRow({
        table: bingoValueTableRef.current,
        currentIndex: currentBingoValueRowIndex,
        setIndex: setCurrentBingoValueRowIndex,
      });
    }
  }, [changeRow]);

  const changeCurrentRow = (tableAttributes) => {
    const { table, currentIndex, setIndex } = tableAttributes;

    // We've processed changes to the row
    setChangeRow(false);

    // If row is out of bounds, return
    if (currentIndex + pointChange < 0) {
      return;
    }

    const rows = table.tBodies[0].rows;

    const currentRow = rows[currentIndex];
    const newCurrentRowIndex = currentIndex + pointChange;
    const newCurrentRow = rows[newCurrentRowIndex];

    // Don't change the bingo type after we've already
    // surpassed the third bingo; we're still doing coverall
    setChangeBingoType(newCurrentRowIndex < 2);

    // Only update if there's a valid row to update
    if (newCurrentRow) {
      currentRow.classList.remove('table-success')
      newCurrentRow.classList.add('table-success')
      setIndex(newCurrentRowIndex);
    }
  }

  return (
    <Container>
      <h2>Scoring</h2>
      <Row>
        <Col>
          <Table size="sm" ref={bingoTypeTableRef}>
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr className={'table-success'}>
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
          <Table size="sm" ref={bingoValueTableRef}>
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
    </Container>
  );
}