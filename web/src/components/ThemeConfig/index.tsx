import { FC } from 'react'
import { ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'

import { useThemeStore } from '@/store/useThemeStore'

type ThemeConfigProps = {
  children?: React.ReactNode
}

export const ThemeConfig: FC<ThemeConfigProps> = ({ children }) => {
  const { themeStyle } = useThemeStore()

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#13c2c2',
          colorInfo: '#13c2c2',
          colorSuccess: '#45c207',
          colorWarning: '#f2a406',
          colorError: '#ff5555',
          colorLink: '#539bff',
        },
        algorithm:
          themeStyle === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default ThemeConfig
