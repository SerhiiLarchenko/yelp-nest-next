import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { version } from '../package.json';
import { mainConfig } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('yelp-nest-next')
    .setDescription('The Yelp Restaurants API')
    .setVersion(version)
    // .addSecurity('user-id', {
    //   type: 'apiKey',
    //   name: 'token',
    //   in: 'header',
    // })
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger-ui', app, document);

  const servicePort = mainConfig().service.port;

  await app.listen(servicePort);
}
bootstrap();
