import axios from "axios";
import jasonPlaceholder from "../apis/jasonPlaceholder.js";
import jsonplaceholder from "../apis/jasonPlaceholder.js";

export const getPosts = () => async dispatch => {
  const responseData = await jsonplaceholder.get("/posts");

  dispatch({ type: "GET_POSTS_DATA", payload: responseData });
};
