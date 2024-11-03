import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from '@/router'
import { ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <AppRouter />
    </ConfigProvider>
  </StrictMode>,
)
