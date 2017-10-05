let initialState = [];

export default (state=initialState, action) => {
  let {payload, type} = action;
  console.log('log in reducer',payload);
  switch(type) {
  case 'CATEGORY_CREATE':
    return [...state, payload];
  case 'CATEGORY_UPDATE':
    return state.map(category => category.id === payload.id ? payload: category);
  case 'CATEGORY_DELETE':
    return state.filter(category => category.id !== payload.id);
  default:
    return state;
  }
};
