import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from 'src/order/entities/order.entity';

export const databasePravader = TypeOrmModule.forRoot({
    type: 'postgres',
    host: '172.17.0.1',
    port: 5433,
    username: 'postgres',
    password: '23032006yj',
    database: 'dodo_pizza_base',
    entities: [
      OrderEntity
    ],
    synchronize: true,
  })