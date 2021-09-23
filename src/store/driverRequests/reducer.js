import {
  GET_REQUESTS,
  GET_REQUESTS_FAIL,
  GET_REQUESTS_SUCCESS,
} from "./actionTypes"

const initalState = {
  requests: [],
  error: {},
}

const DriverRequests = (state = initalState, action) => {
  switch (action.type) {
    case GET_REQUESTS_SUCCESS:
      return {
        ...state,
        requests: action.payload,
      }
    case GET_REQUESTS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default DriverRequests
