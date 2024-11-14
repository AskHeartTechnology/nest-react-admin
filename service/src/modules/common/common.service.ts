import { Injectable } from '@nestjs/common'
import * as SvgCaptcha from 'svg-captcha'
import type { CaptchaObj } from 'svg-captcha'
import { CommonResponse } from '@/utils/response'

@Injectable()
export class CommonService {
  checkHealth(): CommonResponse<null> {
    return CommonResponse.success('This Service is Healthy!')
  }

  generateCode(): CommonResponse<CaptchaObj> {
    const info = SvgCaptcha.create()
    const data = {
      ...info,
      text: info.text,
    }

    return CommonResponse.success('获取验证码成功', data)
  }
}
