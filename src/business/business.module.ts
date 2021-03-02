import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessSchema } from 'src/data-types/schemas';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'Business',
        useFactory: () => BusinessSchema,
      },
    ]),
  ],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule {}
