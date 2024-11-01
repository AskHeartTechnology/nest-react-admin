import { Button, Calendar, ConfigProvider, Radio, theme } from 'antd'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import { useState } from 'react'

const App = () => {
  const [type, setType] = useState('default')
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm:
          type === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <h1>Vite + React</h1>
      <Radio.Group
        value={type}
        onChange={(e) => {
          setType(e.target.value)
        }}
      >
        <Radio.Button value="default">亮色主题</Radio.Button>
        <Radio.Button value="dark">暗色主题</Radio.Button>
      </Radio.Group>

      <div style={{ display: 'flex', gap: 8 }}>
        <Button color="default" variant="solid">
          DefaultSolid
        </Button>
        <Button color="primary" variant="solid">
          PrimarySolid
        </Button>
        <Button color="danger" variant="solid">
          DangerSolid
        </Button>
      </div>
      <Calendar fullscreen={false} value={dayjs()} />
    </ConfigProvider>
  )
}

export default App
