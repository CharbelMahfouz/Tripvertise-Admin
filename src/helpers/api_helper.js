import axios from "axios"

//pass new generated access token here

//apply base url for axios
const API_URL = process.env.REACT_APP_API_URL

export const axiosApi = axios.create({
  baseURL: API_URL,
})

// axiosApi.defaults.headers.common["Authorization"] = token
axiosApi.defaults.headers.post["Access-Control-Allow-Origin"] = "*"
axiosApi.defaults.headers.get["Access-Control-Allow-Origin"] = "*"
axiosApi.defaults.headers.common["Access-Control-Allow-Headers"] = "*"

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => {
    return response.data
  })
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
    .catch(error => console.log(error))
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
