export const initialText = "";
export const textReducer = (state = initialText, action) => {
  switch (action.type) {
    case "toggleText":
      return action.payload;
    case "resetText":
      return "";

    default:
      return state;
  }
};

export const selectText = state => state.text

export const toggleText = (payload) => {
  return{
    type: 'toggleText',
    payload
  }
}
export const resetText = () => {
  return{
    type: 'resetText'
  }
}