import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes"
import { apiError, loginSuccess, logoutUserSuccess } from "./actions"

//Include Both Helper File with needed methods

import { postJwtLogin } from "../../../helpers/authHelper"

function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(postJwtLogin, {
      email: user.email,
      password: user.password,
    })
    if (response == undefined) {
      yield put(apiError("Something Went Wrong"))
      return
    }
    localStorage.setItem("authUser", JSON.stringify(response))
    yield put(loginSuccess(response))
    history.push("/dashboard")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser")

    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
