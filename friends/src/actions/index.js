import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAIL = "FETCH_FRIENDS_FAIL";

export const LOGOUT = "LOGOUT";

export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAIL = "ADD_FRIEND_FAIL";

export const UPDATE_FRIEND_START = "UPDATE_FRIEND_START";
export const UPDATE_FRIEND_SUCCESS = "UPDATE_FRIEND_SUCCESS";
export const UPDATE_FRIEND_FAIL = "UPDATE_FRIEND_FAIL";

export const login = cred => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("/login", cred)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err.response });
    });
};

export const getFriends = friends => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  if (friends[0]) {
    dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: friends });
  } else {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
      })
      .catch(err => console.log(err));
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: LOGOUT
  };
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  axiosWithAuth()
    .post("/friends", friend)
    .then(res => dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};

export const updateFriend = friend => dispatch => {
  dispatch({ type: UPDATE_FRIEND_START });
  axiosWithAuth()
    .put(`/friends/${friend.id}`, friend)
    .then(res => dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_FRIEND_FAIL, payload: err.response }))
};
