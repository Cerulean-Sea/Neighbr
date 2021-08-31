const firebaseReducer = (state = null, action) => {
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem('profile', JSON.stringify({...action?.payload}));
      return action.payload;
    case 'LOGOUT':
      localStorage.clear();
      return null;
    default:
      return state;
  }
}
export default firebaseReducer;