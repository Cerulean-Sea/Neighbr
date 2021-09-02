const firebaseReducer = (state = null, action) => {
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem('profile', JSON.stringify({...action?.payload}));
      return action.payload;
    case 'UPDATE_COMMUNITY':
      localStorage.setItem('profile', JSON.stringify({...state, community: action.payload}));
      return {...state, community: action.payload};
    case 'LOGOUT':
      localStorage.clear();
      return null;
    default:
      return state;
  }
}
export default firebaseReducer;