import axios from "axios"
import accessToken from "./jwt-token-access/accessToken"

//pass new generated access token here
const token = accessToken

//apply base url for axios
const API_URL = "https://localhost:44317/api"

const axiosApi = axios.create({
  baseURL: API_URL,
})

axiosApi.defaults.headers.common["Authorization"] = token
axiosApi.defaults.headers.post["Access-Control-Allow-Origin"] = "*"

// axiosApi.interceptors.response.use(
//   response => response,
//   error => Promise.reject(error)
// )

export async function get(url, config = {}) {
  console.log(url)
  return await axiosApi.get(url, { ...config }).then(response => {
    console.log(response.data)
  })
}

export async function post(url, data, config = {}) {
  console.log(url)
  console.log(data)
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => console.log(response.data))
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}
