import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"
import DriverRequests from "./driverRequests/reducer"

//Calendar
import calendar from "./calendar/reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  calendar,
  DriverRequests,
})

export default rootReducer
