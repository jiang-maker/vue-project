import API from '../http/api'
const api = new API()

/**
 * 测试
 */
export const test = async () => {
  let res = await api.post('users/userinfo')
  return res
}
// export const updateOwnOrgInfo = async (req) => {
//   let res = await api.post('org/updateOwnOrgInfo', req)
//   return res
// }
