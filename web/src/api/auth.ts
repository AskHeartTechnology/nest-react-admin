import { get, post } from '@/utils/request'

export const getCode = () => {
  return get('/common/code')
}

export const login = () => {
  return post('/auth/login')
}

export const logout = () => {
  return get('/auth/logout')
}
