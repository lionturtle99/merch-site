const Reducer = (state = {}, action) => {
  const { title, description, inventory, imageURL, id } = action;
  switch (action.type) {
  case 'ADD_ITEM':
    return Object.assign({}, state, {
      [id]: {
        title: title,
        description: description,
        inventory: inventory,
        imageURL: imageURL,
        id: id
      }
    });
  case 'DELETE_ITEM':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

export default Reducer;