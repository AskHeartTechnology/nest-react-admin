import { FC } from 'react'
import { Button, Space } from 'antd'
import { useAuthStore } from '@/store/useAuthStore'

const LoginPage: FC = () => {
  const { login } = useAuthStore()

  const handleLogin = () => {
    login({})
  }

  return (
    <div>
      <Space size={20}>
        <Button type="primary" onClick={handleLogin}>
          登录
        </Button>
      </Space>
    </div>
  )
}

export default LoginPage
