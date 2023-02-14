export const initialN = 0;

export const nReducer = (state = initialN, action) => {
  switch (action.type) {
    case "n+":
      return state + action.payload;
    case "n-":
      return state - action.payload;
    case "resetN":
      return 0;
    default:
      return state;
  }
};

export const selectN = state => state.n

export const incrementN = (payload) => {
  return{
    type : 'n+',
    payload
  }
}
export const decrementN = (payload) => {
  return{
    type: 'n-',
    payload
  }
}
export const resetN = () => {
  return{
    type: 'resetN'
  }
}