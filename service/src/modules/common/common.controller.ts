import { Controller, Get } from '@nestjs/common'
import { CommonService } from './common.service'

@Controller('common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Get('health')
  checkHealth(): object {
    return this.commonService.checkHealth()
  }

  @Get('code')
  generateSvgCode(): object {
    return this.commonService.generateCode()
  }
}
