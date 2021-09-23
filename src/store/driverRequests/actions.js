import {
  GET_REQUESTS,
  GET_REQUESTS_FAIL,
  GET_REQUESTS_SUCCESS,
} from "./actionTypes"

export const getDriverRequests = () => ({
  type: GET_REQUESTS,
})

export const getDriverRequestsSuccess = requests => ({
  type: GET_REQUESTS_SUCCESS,
  payload: requests,
})

export const getDriverRequestsFail = error => ({
  type: GET_REQUESTS_FAIL,
  payload: error,
})
