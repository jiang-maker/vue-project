
var cdnURL = 'http://192.168.4.42:3000'
// if (process.env.NODE_ENV === 'production') {
//   cdnURL = ''
// } else if (process.env.NODE_ENV === 'preproduction') {
//   cdnURL = ''
// }
export default {
  url: '/route',
  baseURL: '/server/',
  cdnURL: cdnURL,
  method: 'POST',

  headers: { 'content-type': 'application/json' },
  timeout: 60000,

  withCredentials: false, // default

  responseType: 'json', // default

  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },
  maxContentLength: 2000,

  validateStatus: function (status) {
    return status >= 200 && status < 300 // default
  },

  maxRedirects: 5 // default
}
