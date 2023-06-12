export const actions = {
  INIT: 'INIT',
  ADD: 'ADD',
  DELETE: 'DELETE',
  EDIT: 'EDIT',
}

export const todoReducer = (state, action) => {
  switch (action.type) {
    case actions.INIT:
      return [...action.initData];

    case actions.ADD:
      return [...state, action.todoData];

    case actions.DELETE:
      return state.filter((task) => task.id !== action.id);

    case actions.EDIT:
      return state.map((task) =>
        (task.id === action.todoData.id ? { ...action.todoData } : task));

    default:
      return state;
  }
};
