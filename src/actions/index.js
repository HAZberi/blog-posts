import jsonplaceholder from "../apis/jasonPlaceholder.js";

export const getPosts = () => async dispatch => {
  const responseData = await jsonplaceholder.get("/posts");
  
  dispatch({ type: "GET_POSTS_DATA", payload: responseData.data });
};

export const getUser = (id) => async dispatch => {
  const responseData = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "GET_USER_DATA", payload: responseData.data});
}