import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import { useGlobalStore } from '@/store/useGlobalStore'
import AuthRouter from './auth'
import { routes } from './routes'

const AppRouter = () => {
  const Router = () => useRoutes(routes as RouteObject[])
  const { themeStyle } = useGlobalStore()

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm:
          themeStyle === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <BrowserRouter>
        <AuthRouter>
          <Router />
        </AuthRouter>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default AppRouter
