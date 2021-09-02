export default (state = false, action) => {
  switch (action.type) {
    case 'SHOW_POST':
      return !state;
    default:
      return state;
  }
};