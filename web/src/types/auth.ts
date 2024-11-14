// SVG 图片验证码对象
export type SvgImageInfo = {
  text: string
  data: string
} | null

// 登录接参数
export interface ILoginParams {
  email: string
  password: string
  code: string
}

// 登录接口响应数据
export interface ILoginResponse {
  accessToken: string | null
  refreshToken: string | null
}

export interface IUserInfo {
  id: number
  username: string
}
