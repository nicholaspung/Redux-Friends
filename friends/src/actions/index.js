import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = cred => dispatch => {
    dispatch({ type: LOGIN_START });
     return axios.post('http://localhost:5000/api/login', cred)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            dispatch({ type: LOGIN_SUCCESS });
            return true;
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAIL, payload: err.response })
        })
} 