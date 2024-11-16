import { FC } from 'react'
import { Button, Space } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  SunOutlined,
} from '@ant-design/icons'
import { useGlobalStore } from '@/store/useGlobalStore'
import { useThemeStore } from '@/store/useThemeStore'
import { useAuthStore } from '@/store/useAuthStore'

const AppLayoutHeader: FC = () => {
  const { collapsed, changeCollapsed } = useGlobalStore()
  const { themeStyle, changeThemeStyle } = useThemeStore()
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
        {themeStyle === 'dark' ? (
          <MoonOutlined
            onClick={changeThemeStyle}
            spin={true}
            style={{ fontSize: 18 }}
          />
        ) : (
          <SunOutlined
            onClick={changeThemeStyle}
            spin={true}
            style={{ fontSize: 18 }}
          />
        )}
        <Button onClick={logout}>退出</Button>
      </Space>
    </div>
  )
}

export default AppLayoutHeader
