import API from '../../config/api'
const api = new API()

/**
 * 注册
 */

export const register = async () => {
  let res = await api.get('login')
  return res
}
