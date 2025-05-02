import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzaEntity } from 'src/modules/products/pizza/entities/pizza.entity';
import { ToppingEntity } from 'src/modules/products/toppings/entities/topping.entity';

export const databasePravader = TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: '23032006yj',
    database: 'doda_pizza_server',
    entities: [ToppingEntity, PizzaEntity],
    synchronize: true,
  })