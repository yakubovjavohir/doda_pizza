import { Module } from '@nestjs/common';
import { databaseProvide } from './common/config/database.provide';
import { ProfileModule } from './modules/profile/profile.module';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [databaseProvide, ProfileModule, OrderModule]
})
export class AppModule {}
