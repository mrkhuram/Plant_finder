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
} from "../Actions/types";
import Cookie from 'js-cookie'
import history from '../../component/history'


const initialState = {
  user: Cookie.get("user") ? JSON.parse(Cookie.get("user")) : null,

};

export default function (state = initialState, action) {
  switch (action.type) {


    case LOGIN_SUCCESS: {
      Cookie.set("user", action.payload.user)
      setTimeout(() => {
        history.push('/myaccount')
      }, 2000);
      return { 
        ...state,
        user: action.payload.user
      }
    }
    case REGISTER_SUCCESS: {
      console.log(action.payload.user);

      setTimeout(() => {
        history.push('/login')
      }, 1000);
      return {
        ...state,
        user: action.payload.user
      }
    }
    case UPDATE_SUCCESS:
      return {
        ...state,
        user: action.payload.user,


        // password:action.payload.password,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false
      };
      break;
    case LOGIN_FAILED: {
      console.log(" works here");

      return {
        msg: "Invalid Credentials."
      }
    }
    case REGISTER_FAILED:
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
    case UPDATE_FAILED:
      localStorage.removeItem('token')
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: null,
        user: null
      }
      break;
    case 'TOKEN_CONFIRMED':
    case 'FORGOT_PASSWORD':
    case 'PASSWORD_CHANGED':
      console.log(action.payload);

    default:
      return state;
  }
}
