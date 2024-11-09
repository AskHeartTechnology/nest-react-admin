import { message } from 'antd'

type MessageType = 'success' | 'error' | 'warning' | 'info' | 'loading'

export const toast = (
  type: MessageType,
  content: string,
  duration: number = 2,
) => {
  message.destroy()
  message.open({ type, content, duration })
}
