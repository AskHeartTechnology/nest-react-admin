import { FC } from 'react'
import { Button, Space } from 'antd'
import { useAuthStore } from '@/store/useAuthStore'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useGlobalStore } from '@/store/useGlobalStore'

const AppLayoutHeader: FC = () => {
  const { collapsed, changeCollapsed, changeThemeStyle } = useGlobalStore()
  const { logout } = useAuthStore()

  return (
    <div className="layout-header">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => changeCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
      <Space size={20}>
        <Button onClick={changeThemeStyle}>切换主题</Button>
        <Button onClick={logout}>退出</Button>
      </Space>
    </div>
  )
}

export default AppLayoutHeader
