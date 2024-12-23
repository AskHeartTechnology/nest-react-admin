import { FC, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/useAuthStore'

// 已经登录
const Authed = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [navigate])
  return <></>
}

// 需要登录
const NeedAuth = () => {
  const navigate = useNavigate()
  const { fetchCode } = useAuthStore()

  useEffect(() => {
    // 清空验证码
    fetchCode(true)
    navigate('/login')
  }, [navigate])
  return <></>
}

const AuthRouter: FC<{ children: JSX.Element }> = ({ children }) => {
  const { accessToken: token } = useAuthStore()
  const { pathname } = useLocation()

  // 没有token，并且不是登录路由，则跳转到登录页面
  if (!token && pathname !== '/login') {
    return <NeedAuth />
  }

  // 有token，是登录路由，则跳转到主页
  if (token && pathname === '/login') {
    return <Authed />
  }
  return <>{children}</>
}

export default AuthRouter
