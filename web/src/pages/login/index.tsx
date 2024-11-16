import { FC } from 'react'
import { Button, Col, ConfigProvider, Form, Input, Row, theme } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { useAuthStore } from '@/store/useAuthStore'
import { toast } from '@/utils/message'
import { ILoginParams } from '@/types/auth'

import './index.scss'
import Logo from '/react.svg'
import { EMAIL_REGEXP } from '@/utils/constant'

const LoginPage: FC = () => {
  const [form] = Form.useForm<ILoginParams>()
  const { codeInfo, fetchCode, login } = useAuthStore()

  const checkCode = (input: string) => {
    if (codeInfo) {
      return codeInfo.text.toLowerCase() === input.toLowerCase()
    } else {
      return false
    }
  }

  const handleGetCode = async () => {
    try {
      const { email } = await form.validateFields(['email'])
      fetchCode(false, email)
    } catch (e) {
      console.log(222, e)
    }
  }

  const handleLogin = (values: ILoginParams) => {
    console.log('Login Info Values: ', values)
    const { email, password, code } = values
    if (!checkCode(code)) {
      toast('error', '验证码错误')
      return
    }
    login({
      email,
      password,
      code,
    })
  }

  return (
    <div className="login-page">
      <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
        <div className="login-form-wrapper">
          <Form
            name="login-form"
            style={{
              width: 400,
              maxWidth: 600,
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              padding: 20,
              borderRadius: 20,
            }}
            autoComplete="off"
            form={form}
            onFinish={handleLogin}
          >
            <div className="form-header">
              <img src={Logo} alt="logo" />
              <h1>Nest React Admin</h1>
            </div>
            <Form.Item<ILoginParams>
              name="email"
              rules={[
                { required: true, message: '请输入邮箱地址' },
                { pattern: EMAIL_REGEXP, message: '请输入正确的邮箱地址' },
              ]}
            >
              <Input
                type="email"
                prefix={<MailOutlined />}
                placeholder="请输入邮箱"
              />
            </Form.Item>
            <Form.Item<ILoginParams>
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="请输入密码"
              />
            </Form.Item>
            <Row gutter={20} style={{ margin: 0 }}>
              <Col span={16} style={{ padding: 0 }}>
                <Form.Item<ILoginParams>
                  name="code"
                  rules={[{ required: true, message: '请输入验证码' }]}
                >
                  <Input prefix={<MailOutlined />} placeholder="请输入验证码" />
                </Form.Item>
              </Col>
              <Col span={8} style={{ padding: 0 }}>
                {codeInfo ? (
                  <img
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(
                      codeInfo?.data as string,
                    )}`}
                    alt="code"
                    style={{ width: '100%', height: 50, cursor: 'pointer' }}
                    onClick={handleGetCode}
                  />
                ) : (
                  <Button
                    type={'primary'}
                    style={{
                      width: '90%',
                      position: 'absolute',
                      top: 5,
                      right: 0,
                    }}
                    onClick={handleGetCode}
                  >
                    获取验证码
                  </Button>
                )}
              </Col>
            </Row>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                登 录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </ConfigProvider>
    </div>
  )
}

export default LoginPage
