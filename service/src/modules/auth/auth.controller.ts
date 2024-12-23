import { Controller, Get, Post } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  checkHealth(): object {
    return this.authService.login()
  }

  @Get('logout')
  generateSvgCode(): object {
    return this.authService.logout()
  }
}
