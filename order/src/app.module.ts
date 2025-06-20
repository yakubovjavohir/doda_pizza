import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { databasePravader } from './common/config/database.pravayder';

@Module({
  imports: [databasePravader, OrderModule],
})
export class AppModule {}
