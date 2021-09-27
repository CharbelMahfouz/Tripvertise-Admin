import axios from "axios"
import { post, del, get, put } from "./api_helper"
import * as url from "./url_helper"
import { axiosApi } from "./api_helper"

// Gets the logged in user data from local session
const getLoggedInUser = () => {
  const user = localStorage.getItem("user")
  if (user) return JSON.parse(user)
  return null
}

//is user is logged in
const isUserAuthenticated = () => {
  return getLoggedInUser() !== null
}

// Edit profile
const postJwtProfile = data => post(url.POST_EDIT_JWT_PROFILE, data)

// Register Method
const postJwtRegister = (url, data) => {
  console.log(url)
  return axiosApi
    .post(url, data)
    .then(response => {
      if (response.status >= 200 || response.status <= 299) return response.data
      throw response.data
    })
    .catch(err => {
      console.log(err)
      let message
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found"
            break
          case 500:
            message =
              "Sorry! something went wrong, please contact our support team"
            break
          case 401:
            message = "Invalid credentials"
            break
          default:
            message = err[1]
            break
        }
      }
      throw message
    })
}

// Login Method
const postJwtLogin = data => post(url.POST_JWT_LOGIN, data)

// postForgetPwd
const postJwtForgetPwd = data => post(url.POST_FAKE_JWT_PASSWORD_FORGET, data)

// get Events
export const getEvents = () => get(url.GET_EVENTS)

// add Events
export const addNewEvent = event => post(url.ADD_NEW_EVENT, event)

// update Event
export const updateEvent = event => put(url.UPDATE_EVENT, event)

// delete Event
export const deleteEvent = event =>
  del(url.DELETE_EVENT, { headers: { event } })

// get Categories
export const getCategories = () => get(url.GET_CATEGORIES)

// DRIVER REQUESTS
// get Requests
export const getDriverRequests = (id) => {
  return get(`${url.GET_DRIVER_REQUESTS}/?statusId=${id}`)
}

export const setRequestStatus = (requestId , statusId) => {
  console.log(requestId, statusId)
  return post(`${url.SET_DRIVER_REQUEST_STATUS}/${requestId}/${statusId}`)
}




export {
  getLoggedInUser,
  isUserAuthenticated,
  postJwtRegister,
  postJwtLogin,
  postJwtForgetPwd,
  postJwtProfile,
}
