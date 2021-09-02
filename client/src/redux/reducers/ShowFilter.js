export default (state = false, action) => {
  switch (action.type) {
    case 'SHOW_FILTER':
      return !state;
    default:
      return state;
  }
};