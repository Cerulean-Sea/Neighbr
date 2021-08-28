const firebaseReducer = (state = null, action) => {
  switch (action.type) {
    case 'AUTH':
      return action.payload;
    default:
      return state;
  }
}
export default firebaseReducer;