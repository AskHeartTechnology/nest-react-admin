import { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Avatar, Menu, theme } from 'antd'
import { useGlobalStore } from '@/store/useGlobalStore'
import { authRoutes } from '@/router/routes'
import { deepLoadRoutes, getOpenKeysByPathname } from '@/utils/menu'
import {
  MenuClickEventHandler,
  MenuOpenChangeEventHandler,
} from '@/types/router'

const AppLayoutNavBar: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { collapsed } = useGlobalStore()
  const [openKeys, setOpenKeys] = useState(getOpenKeysByPathname(pathname))
  const {
    token: { colorTextHeading, colorBgContainer },
  } = theme.useToken()

  const rootSubmenuKeys: string[] = []
  const onOpenChange: MenuOpenChangeEventHandler = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  const handleMenuClick: MenuClickEventHandler = ({ key }) => {
    navigate(`${key}`)
  }
  return (
    <div className="nav">
      <div
        className="nav-title"
        style={{ color: colorTextHeading, background: colorBgContainer }}
      >
        {collapsed ? <Avatar size={30}>NRA</Avatar> : 'Nest React Admin'}
      </div>
      <Menu
        mode="inline"
        openKeys={openKeys}
        defaultSelectedKeys={[pathname]}
        items={deepLoadRoutes(authRoutes)}
        onClick={handleMenuClick}
        onOpenChange={onOpenChange}
      />
    </div>
  )
}

export default AppLayoutNavBar
