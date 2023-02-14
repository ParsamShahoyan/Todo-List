export const initialTodos = [];
export const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case "addTodo":
      return [
        {
          id: new Date().getTime().toString(),
          compeited: false,
          title: action.payload,
        },
        ...state,
      ];

    case "delItem":
      return [...state.filter((el) => el.id !== action.payload)];

    case "checkItem":
      return [
        ...state.map((el) => {
          if (el.id !== action.payload) return el;
          return {
            ...el,
            compeited: !el.compeited,
          };
        }),
      ];

    default:
      return state;
  }
};

export const selectTodos = state => state.todos

export const addTodo = (payload) => {
  return{
    type: 'addTodo',
    payload
  }
}
export const delItem = (payload) => {
  return{
    type: 'delItem',
    payload
  }
}
export const checkItem = (payload) => {
  return{
    type: 'checkItem',
    payload
  }
}
