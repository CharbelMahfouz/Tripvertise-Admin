import {
  GET_REQUESTS,
  GET_REQUESTS_FAIL,
  GET_REQUESTS_SUCCESS,
  SET_REQUEST_STATUS_FAILED,
  SET_REQUEST_STATUS_SUCCESS,
} from "./actionTypes"

const initalState = {
  requests: [],
  error: {},
  response: {},
  loading: false
}

const DriverRequests = (state = initalState, action) => {
  switch (action.type) {
    case GET_REQUESTS:
      return {
        ...state,
        loading: true
      }
    case GET_REQUESTS_SUCCESS:
      return {
        ...state,
        requests: action.payload,
        loading: false
      }
    case GET_REQUESTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case SET_REQUEST_STATUS_SUCCESS:
      return {
        ...state,
        response: action.payload
      }
    case SET_REQUEST_STATUS_FAILED:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default DriverRequests
