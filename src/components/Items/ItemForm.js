import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function ItemForm(props) {
  
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({title: event.target.title.value, description: event.target.description.value, inventory: event.target.inventory.value, imageURL: event.target.imageURL.value, id: v4()})
  }

  return (
    <Form onSubmit={handleNewItemFormSubmission}>
      <h6 className="text-center my-2">Add new Item</h6>
      <Form.Control
        type='text'
        name='title'
        placeholder='Item Name'
        className="mb-3 shadow-sm"
        required="required" />
      <Form.Control
        as='textarea'
        rows={4}
        name='description'
        placeholder='Description'
        className="mb-3 shadow-sm" 
        required="required"/>
      <Form.Control
        type='number'
        min='1'
        max='15000'
        name='inventory'
        placeholder='Inventory'
        className="mb-3 shadow-sm" 
        required="required"/>
      <Form.Control
        type='text'
        name='imageURL'
        placeholder='Image URL'
        className="mb-3 shadow-sm" 
        required="required"/>
      <Button variant="dark" size="sm" type="submit" className="px-4 rounded-pill shadow-sm">Zubmit</Button>
    </Form>
  );
}

ItemForm.propType = {
  onNewItemCreation: PropTypes.func
}

export default ItemForm;