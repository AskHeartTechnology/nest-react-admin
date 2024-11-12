import { Injectable } from '@nestjs/common'

@Injectable()
export class CommonService {
  checkHealth(): object {
    return { code: 2000, message: 'This Service is Healthy!' }
  }
}
