import axios from 'axios';
import { apiBaseURL, apiKey } from '../Utils/Config';

export default function FetchCoinData() {
  return disptach => {
    dispatch({ type: FETCHING_COIN_DATA })
    return axios.get(`${apiBaseURL}/v1/cryptocurrency/listings/latest?limit=10`)
      .then(res => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
      })
  }
}