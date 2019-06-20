import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FETCH_FRIENDS_FAIL,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_START
} from "../actions";

const initializeState = {
  loggedIn: false,
  error: "",
  loggingIn: false,
  friends: [],
  fetchingFriends: false,
  deletingFriend: false,
  savingFriends: false,
  updatingFriend: false
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
        }
    case FETCH_FRIENDS_SUCCESS:
        return {
            ...state,
            fetchingFriends: false,
            friends: action.payload
        }
    case FETCH_FRIENDS_FAIL:
        return {
            ...state,
            fetchingFriends: true,
            error: "Could not fetch friends"
        }
    default:
      return state;
  }
}
