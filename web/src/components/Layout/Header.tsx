import { FC } from 'react'
import { Button, Space } from 'antd'
import { useAuthStore } from '@/store/useAuthStore'

const AppLayoutHeader: FC = () => {
  const { logout } = useAuthStore()

  return (
    <div>
      <Space size={20}>
        <Button onClick={logout}>退出</Button>
      </Space>
    </div>
  )
}

export default AppLayoutHeader
