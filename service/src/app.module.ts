import { Module } from '@nestjs/common'
import { CommonModule } from '@/modules/common/common.module'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [CommonModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
