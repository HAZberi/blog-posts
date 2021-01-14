const postReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_POSTS_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
