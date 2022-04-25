import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function Item(props) {
  return (
    <ListGroup.Item id={props.item} className="mb-3 border shadow-sm">
      <Row>
        <Col md={4}>
          <img src={props.imageURL} alt={props.title} className="w-100" style={{maxWidth: '350px'}} />
        </Col>
        <Col md={8} className="pt-2 pb-2 position-relative">
          <h4 className="fw-normal border-bottom pb-1">{props.title} <span className="fw-light">|</span> <span className="fs-6">  ({props.inventory} in stock)</span></h4>
          {props.description}

          <div className="mt-3 me-3 text-end position-absolute bottom-0 end-0">
            <Button variant="dark" size="sm" className="me-3 px-4 rounded-pill shadow-sm">Add to Kart</Button>
            <Button variant="dark" size="sm" className="px-4 rounded-pill shadow-sm">Edit</Button>
            <Button variant="dark" size="sm" className="px-4 rounded-pill shadow-sm" onClick={() => props.onClickingDelete(props.id)} >Delete</Button>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default Item;