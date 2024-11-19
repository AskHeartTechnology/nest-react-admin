import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('/api')
  try {
    const port = app.get(ConfigService).get('PORT') || 8088
    await app.listen(port, () => {
      console.log(`This Server is running at\n\thttp://localhost:${port}/`)
    })
  } catch (e) {
    console.log('This App is running error: ', e)
  }
}
bootstrap()
