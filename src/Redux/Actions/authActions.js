import axios from 'axios'
import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGOUT_SUCCESS,
    UPDATE_FAILED,
    UPDATE_SUCCESS
} from "./types";
import { returnErrors } from './errorActions';
import baseUrl from '../config'
import Cookie from "js-cookie";
import history from '../../component/history'
import { toast } from 'react-toastify'
//RegisterUser

export function register(data) {
    return dispatch => {

        console.log(data);

        axios.post(baseUrl + '/routes/register_user', data)
            .then(res => {
                if (res.data.msg) {
                    toast.error(res.data.msg)
                    return true
                }
                toast.success("Congratulation! You have successfuly Register")
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
                toast.error("Internal Server Error or Email Already in use.")
                dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"))
                dispatch({
                    type: REGISTER_FAILED,

                })
            })
    }
}

export function registerNursery(data) {
    return dispatch => {

        console.log(data);

        axios.post(baseUrl + '/routes/register_nursery', data)
            .then(res => {
                toast.success("Congratulation! You have successfuly Register")
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
                toast.error("Internal Server Error or Email Already in use.")
                dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"))
                dispatch({
                    type: REGISTER_FAILED,

                })
            })
    }
}




export const login = ({ email, password }) => dispatch => {

    let body = {
        email,
        password
    }

    axios.post(baseUrl + '/routes/login', body)
        .then(res => {
            if (res.status == 200) {

                toast.success("Congratulation! You have successfuly Login")
                console.log(res.data);
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data,


                })
            }
        })
        .catch(err => {
            console.log(err);
            toast.error("Invalid Credentials or Internal Server Error.")
            dispatch({
                type: LOGIN_FAILED,

            })
        })
}

//LOGOUT USER
export const logout = () => {
    Cookie.remove("user")

    setTimeout(() => {
        history.push('/')

    });


    return {
        type: LOGOUT_SUCCESS
    }
}

//Check Token & load user  
// export const loaduser = () => (dispatch, getState) => {
//     //user loading
//     dispatch({ type: USER_LOADING })
//     axios.get('user', tokenConfig(getState))
//         .then(res => dispatch({
//             type: USER_LOADED,
//             payload: res.data,

//         }))
//         .catch(err => {
//             dispatch(returnErrors(err.response.data, err.response.status))
//             dispatch({
//                 type: AUTH_ERROR
//             })
//         })
// }
// //Setup config/headers & token

// export const tokenConfig = getState => {
//     //Get token from localstorage
//     const token = getState().auth.token;

//     //Headers
//     const config = {
//         headers: {
//             "Content-type": "application/json"
//         }
//     }
//     //If token , add to headers
//     if (token) {
//         config.headers['x-auth-token'] = token
//     }
//     return config
// }



// export const forgotPassword = (data) => {
//     return dispatch => {

//         const config = {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }

//         axios.post('/forgotpassword', data, config)
//             .then(res => dispatch({

//                 type: "FORGOT_PASSWORD",
//                 payload: res.data.capital

//             }
//             ))
//             .catch(err => console.log(err))

//     }

// }


// export const setNewPassword = (data) => {
//     return dispatch => {

//         const config = {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }
//         console.log(data);


//         axios.post('/change_password', data)
//             .then(res => dispatch({

//                 type: "PASSWORD_CHANGED",
//                 payload: res.data.capital

//             }
//             ))
//             .catch(err => console.log(err))

//     }

// }