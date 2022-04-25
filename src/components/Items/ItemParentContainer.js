import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Item from './Item';
import ItemForm from './ItemForm.js';
import { connect } from 'react-redux';


class ItemParentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItems: 0
    };
  }

  handleAddingNewItemToList = (newItem) => {
    const { dispatch } = this.props;
    const { title, description, inventory, imageURL, id } = newItem;
    const action = {
      type: 'ADD_ITEM',
      title: title,
      description: description,
      inventory: inventory,
      imageURL: imageURL,
      id: id
    }
    dispatch(action);
    this.setState({totalItems: this.state.totalItems + 1})
  }

  handleDeletingItem = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_ITEM',
      id: id
    }
    dispatch(action);
    this.setState({totalItems: this.state.totalItems - 1})
  }

  render(){
    return (
      <Container className="pt-2">
        <Row className="border rounded shadow-sm">
          <Col md={8} className="p-3 fw-light">
            <ListGroup>
              {Object.values(this.props.mainMerchList).map((item) =>
              <React.Fragment>
                <Item title={item.title}
                  description={item.description}
                  inventory={item.inventory}
                  imageURL={item.imageURL}
                  key={item.id}
                  id={item.id}
                  onClickingDelete={this.handleDeletingItem}
                />
              </React.Fragment>
              )}
            </ListGroup>
          </Col>
          <Col md={4} className="py-3 px-4 fw-light">
            <Row className="text-center border rounded shadow-sm pb-5 pt-3 px-3">
              <Col>
                <ItemForm onNewItemCreation={this.handleAddingNewItemToList} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    mainMerchList: state
  }
}

ItemParentContainer = connect(mapStateToProps)(ItemParentContainer);

export default ItemParentContainer;