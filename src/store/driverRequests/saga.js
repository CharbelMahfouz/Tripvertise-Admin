import { takeEvery, put, call } from "redux-saga/effects"
import { GET_REQUESTS, SET_REQUEST_STATUS } from "./actionTypes"
import { getDriverRequestsSuccess, getDriverRequestsFail } from "./actions"
import {
  getDriverRequests,
  setRequestStatus,
} from "helpers/api_requests_helper"
import { setDriverRequestStatusSuccess } from "store/actions"

function* fetchDriverRequests({ id }) {
  try {
    const response = yield call(getDriverRequests, id)
    yield put(getDriverRequestsSuccess(response))
  } catch (error) {
    console.log(error)
    yield put(getDriverRequestsFail(error))
  }
}

function* setDriverRequestStatus({ requestId, statusId }) {
  try {
    const response = yield call(setRequestStatus, requestId, statusId)
    console.log(response)
    yield put(setDriverRequestStatusSuccess(response))
  } catch (error) {
    console.log(error)
    yield put(setDriverRequestStatusFailed(error))
  }
}

function* driverRequestsSaga() {
  yield takeEvery(GET_REQUESTS, fetchDriverRequests)
  yield takeEvery(SET_REQUEST_STATUS, setDriverRequestStatus)
}

export default driverRequestsSaga
