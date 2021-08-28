import { FETCH_COMMENTS, CREATE_COMMENT, LIKE_COMMENT, REPORT_COMMENT, DELETE_COMMENT } from '../actions/actionTypes';

const reducer = (comments = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload;
    case FETCH_COMMENT:
      return action.payload;
    case FETCH_COMMENT_BY_USER:
      return action.payload;
    case CREATE_COMMENT:
      return [...comments, action.payload];
    case LIKE_COMMENT:
    case REPORT_COMMENT:
      return comments.map((comment) => (comment._id === action.payload._id ? action.payload : comment));
    case DELETE_COMMENT:
      return comments.filter((comment) => comment._id !== action.payload);
    default:
      return comments;
  }
}

export default reducer;