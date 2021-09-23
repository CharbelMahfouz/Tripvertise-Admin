import { takeEvery, put, call } from "redux-saga/effects"
import { GET_REQUESTS } from "./actionTypes"
import { getDriverRequestsSuccess, getDriverRequestsFail } from "./actions"
import { getDriverRequests } from "helpers/api_requests_helper"

function* fetchDriverRequests() {
  try {
    const response = yield call(getDriverRequests)
    console.log(response)
    yield put(getDriverRequestsSuccess(response))
  } catch (error) {
    console.log(error)
    yield put(getDriverRequestsFail(error))
  }
}

function* driverRequestsSaga() {
  yield takeEvery(GET_REQUESTS, fetchDriverRequests)
}

export default driverRequestsSaga
