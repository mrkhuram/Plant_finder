import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer';
import adsReducer from './adReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer,
    ads: adsReducer
})

export default rootReducer;