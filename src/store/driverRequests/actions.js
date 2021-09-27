import {
  GET_REQUESTS,
  GET_REQUESTS_FAIL,
  GET_REQUESTS_SUCCESS,
  SET_REQUEST_STATUS,
  SET_REQUEST_STATUS_SUCCESS,
} from "./actionTypes"

export const getDriverRequests = (id) => ({
  type: GET_REQUESTS,
  id
})

export const getDriverRequestsSuccess = requests => ({
  type: GET_REQUESTS_SUCCESS,
  payload: requests,
})

export const getDriverRequestsFail = error => ({
  type: GET_REQUESTS_FAIL,
  payload: error,
})

export const setDriverRequestStatus = (requestId , statusId) => ({
  type: SET_REQUEST_STATUS,
  requestId,
  statusId
})

export const setDriverRequestStatusSuccess = (response) => ({
  type: SET_REQUEST_STATUS_SUCCESS,
  payload: response
})


export const setDriverRequestStatusFailed = (error) => ({
  type: SET_REQUEST_STATUS_FAILED,
  payload: error
})


