const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return action.payload;
    case 'CREATE_POST':
      return [...state, action.payload];
    case 'DELETE_POST':
      return state.filter((post) => {
        return post._id !== action.payload
      });
    case 'UPDATE_POST':
      return state.map((post) => post._id === action.payload._id ? action.payload : post);
    default:
      return state;
  }
};