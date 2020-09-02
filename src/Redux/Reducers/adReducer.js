import {
  MY_ADS
} from "../Actions/types";
import Cookie from 'js-cookie'
import history from '../../component/history'


const initialState = {
  ads: null,

};

export default function (state = initialState, action) {
  switch (action.type) {


    case MY_ADS: {
     
      return {
        ...state,
        ads: action.payload
      }
    }
   

    default:
      return state;
  }
}
