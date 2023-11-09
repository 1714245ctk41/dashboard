export const ACTIONS = {
  AUTHOR: "AUTHOR",
  ADD_ITEM: "ADD_ITEM",
  EDIT_ITEM: "EDIT_ITEM",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
};

export const initialState = {
  user: null,
  todos: {}
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.AUTHOR:
      return {
        ...state,
        user: action.payload
      };
    case ACTIONS.ADD_ITEM:
      return {
        ...state,
        todos: { ...action.payload, ...state.todos}
      }
    case ACTIONS.EDIT_ITEM:
      return {
        ...state,
        todos: action.payload
      }
    case ACTIONS.REMOVE_TODO_ITEM:
      return {
        ...state,
        todos: {
          ...action.payload
        }
      }
  
    default:
        return state;
  }
}