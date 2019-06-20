import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions";

const initializeState = {
  loggedIn: false,
  error: '',
  loggingIn: false
};

export default function(state = initializeState, action) {
  switch (action.type) {
    case LOGIN_START:
        return {
            ...state,
            loggingIn: true,
            error: ''
        }
    case LOGIN_SUCCESS:
        return {
            ...state,
            loggingIn: false,
            loggedIn: true,
            error: ''
        }
    case LOGIN_FAIL:
        return {
            ...state,
            loggingIn: false,
            loggedIn: false,
            error: action.payload
        }
    default:
      return state;
  }
}
