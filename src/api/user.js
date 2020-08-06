import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/admin/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout(data) {
  return request({
    url: '/api/admin/logout',
    method: 'post',
    data
  })
}

export function resetPwd(data) {
  return request({
    url: '/api/admin/reset_pwd',
    method: 'post',
    data
  })
}
