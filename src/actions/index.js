import jsonplaceholder from "../apis/jasonPlaceholder.js";
import _ from "lodash";

export const getPosts = () => async (dispatch) => {
  const responseData = await jsonplaceholder.get("/posts");

  dispatch({ type: "GET_POSTS_DATA", payload: responseData.data });
};

//------------------------------------------------------------------//

//ISSUE - We are fetching each user multiple times

//In this application and with the 1st approach we are overfetching resources (Users)
//Each post triggers a new fetch and we are having duplicate entries in our state

//Approach 1
/* export const getUser = (id) => async dispatch => {
  const responseData = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "GET_USER_DATA", payload: responseData.data});
} */


//Approach 2
/* export const getUser = id => dispatch => _getUser(id, dispatch);
const _getUser = _.memoize(async (id, dispatch) => {
  const responseData = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "GET_USER_DATA", payload: responseData.data });
}); */

//With this approach we are only able to fetch or get User one time
//If in our application there is a need to re-fetch the same User our application
//can break. For this particular example application - it works as expected. 

//Approach 3
export const getUser = (id) => async dispatch => {
  const responseData = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "GET_USER_DATA", payload: responseData.data});
}
