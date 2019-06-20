import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAIL = 'FETCH_FRIENDS_FAIL';

export const login = cred => dispatch => {
    dispatch({ type: LOGIN_START });
     return axiosWithAuth()
        .post('/login', cred)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                dispatch({ type: LOGIN_SUCCESS });
                return true;
            })
            .catch(err => {
                dispatch({ type: LOGIN_FAIL, payload: err.response })
            })
} 

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axiosWithAuth()
        .get('/friends')
            .then(res => {
                dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data })
            })
            .catch(err => console.log(err))
}