import { takeEvery, fork, put, all, call } from "redux-saga/effects"

//Account Redux states
import { REGISTER_USER } from "./actionTypes"
import { registerUserSuccessful, registerUserFailed } from "./actions"

//Include Both Helper File with needed methods
import { postJwtRegister } from "../../../helpers/api_requests_helper"
import { POST_JWT_LOGIN, POST_JWT_REGISTER } from "helpers/url_helper"

// Is user register successfull then direct plot user in redux.
function* registerUser({ payload: { user } }) {
  try {
    const response = yield call(postJwtRegister, `${POST_JWT_REGISTER}/1`, user)
    console.log(response)
    yield put(registerUserSuccessful(response))
  } catch (error) {
    yield put(registerUserFailed(error))
  }
}

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser)
}

function* accountSaga() {
  yield all([fork(watchUserRegister)])
}

export default accountSaga
