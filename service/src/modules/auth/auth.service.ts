import { Injectable } from '@nestjs/common'
import { CommonResponse } from '@/utils/response'

@Injectable()
export class AuthService {
  login(): CommonResponse<object> {
    const data = {
      accessToken: '1234567890',
      refreshToken: '0987654321',
    }

    return CommonResponse.success('登录成功', data)
  }

  logout(): CommonResponse<null> {
    return CommonResponse.success()
  }
}
