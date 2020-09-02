import axios from 'axios'
import {
    AD_POSTED,
    MY_ADS
} from "./types";
import { returnErrors } from './errorActions';
import baseUrl from '../config'
import { toast } from 'react-toastify'
//Post your ad of plant

export function postAd(data) {
    return dispatch => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        let formData = new FormData();

        for (var item in data) {
            formData.append(item, data[item]);
        }

        axios.post('http://localhost:9000/routes/post_new_add', formData, config)
            .then(res => {
                if (res) {
                    toast.success("Successfuly posted.")
                }
                dispatch({
                    type: AD_POSTED,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export function getMyAd(data) {
    return dispatch => {

        axios.post('http://localhost:9000/routes/get_my_ads', data)
            .then(res => {
                console.log(res);

                dispatch({
                    type: MY_ADS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export function getAllAds() {
    return dispatch => {

        axios.get('http://localhost:9000/routes/get_all_plants')
            .then(res => {
                console.log(res);

                dispatch({
                    type: MY_ADS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function sendEmail(data) {
    return dispatch => {

        axios.post('http://localhost:9000/routes/contact_us', data)
            .then(res => {
                if (res) {
                    toast.success("Successfuly Sent.")
                }

            })
            .catch(err => {
                console.log(err);
            })
    }
}