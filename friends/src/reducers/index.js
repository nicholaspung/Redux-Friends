import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FETCH_FRIENDS_FAIL,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_START,
  LOGOUT,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAIL
} from "../actions";

const initializeState = {
  loggedIn: Boolean(localStorage.getItem("token")),
  error: "",
  loggingIn: false,
  friends: [],
  fetchingFriends: false,
  deletingFriend: false,
  savingFriends: false,
  updatingFriends: false
};

export default function(state = initializeState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        error: ""
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        error: action.payload
      };
    case FETCH_FRIENDS_START:
      return {
        ...state,
        fetchingFriends: true
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload
      };
    case FETCH_FRIENDS_FAIL:
      return {
        ...state,
        fetchingFriends: true,
        error: "Could not fetch friends"
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false
      };
    case ADD_FRIEND_START:
        return {
            ...state,
            updatingFriends: true
        }
    case ADD_FRIEND_SUCCESS:
        return {
            ...state,
            updatingFriends: false,
            friends: action.payload
        }
    case ADD_FRIEND_FAIL:
        return {
            ...state,
            updatingFriends: false
        }
    default:
      return state;
  }
}
