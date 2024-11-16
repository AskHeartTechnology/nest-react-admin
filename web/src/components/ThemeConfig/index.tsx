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
        algorithm:
          themeStyle === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default ThemeConfig
