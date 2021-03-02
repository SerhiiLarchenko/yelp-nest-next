import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessModule } from './business/business.module';
import { mainConfig } from './config';

@Module({
  imports: [MongooseModule.forRoot(mainConfig().database.host), BusinessModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
