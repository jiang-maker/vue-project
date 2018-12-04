import axios from 'axios'
import config from './config'

const instance = axios.create(config)
class API {
  post (url, param) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, param, config)
        .then(res => {
          let data = res.data
          // ie9兼容性
          if (!res.data) {
            data = JSON.parse(res.request.responseText)
          }
          if (data.code == 523) {
            window.location.href = '/#/login'
          } else if (data.code == 500 || data.code == 522 || data.code >= 600) {
            window.location.href = '/#/error?text=' + data.msg
          } else {
            resolve(data)
          }
        })
        .catch(err => {
          reject(err)
          window.location.href = '/#/error?text=' + err
        })
    })
  }
  get (url, param) {
    return new Promise((resolve, reject) => {
      instance({
        url: url,
        params: param
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
export default API