let initialState = {};

export default (state=initialState, action) => {
  let{type, payload} = action;

  switch(type) {
  case 'CATEGORY_CREATE': return {...state, [payload.id]: []};
  case 'CATEGORY_DELETE': return {...state, [payload.id]: null};
  case 'EXPENSE_CREATE':
  categoryId = payload;
    let categoryExpenses = state[categoryId];
    return {...state, [categoryId]: [...categoryExpenses, payload]};
  case 'EXPENSE_UPDATE':
  let updateState = state;
    categoryId = payload.categoryId;
    updateState[categoryId] = updateState[categoryId].map(expense => {
      if(expense.id === payload.id) expense = payload;
      return expense;
    });
    return {...updateState};
  case 'EXPENSE_DELETE':
    return
  default: return state;
  }
};
