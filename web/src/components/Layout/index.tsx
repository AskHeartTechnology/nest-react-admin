import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd'
import { useGlobalStore } from '@/store/useGlobalStore'
import AppLayoutNavBar from './NavBar'
import AppLayoutHeader from './Header'

const { Header, Sider, Content } = Layout

const AppLayout: FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  const { collapsed } = useGlobalStore()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <AppLayoutNavBar />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <AppLayoutHeader />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout
