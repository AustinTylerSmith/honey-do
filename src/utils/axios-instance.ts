import axios from 'axios'

let CSRF_TOKEN = ''

if (document.cookie.match(new RegExp(`XSRF-TOKEN=([^;]+)`)) != null) {
  CSRF_TOKEN = document.cookie.match(new RegExp(`XSRF-TOKEN=([^;]+)`))[1]
}

// TODO: set the timeout to something sane once the initial upload is complete in PROD.
const axiosInstance = axios.create({
  timeout: 30000000,
  baseURL: '/app',
  headers: {
    'X-XSRF-TOKEN': CSRF_TOKEN,
    'Content-Type': 'application/json;charset=UTF-8',
  }
})

export default axiosInstance

