import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzaEntity } from 'src/modules/products/pizza/entities/pizza.entity';
import { SnackEntity } from 'src/modules/products/snacks/entities/snack.entity';
import { PcEntity } from 'src/modules/products/snacks/pc/entities/pc.entity';
import { SSBEntity } from 'src/modules/products/snacks/ssb/entities/ssb.entity';
import { ToppingEntity } from 'src/modules/products/toppings/entities/topping.entity';

export const databasePravader = TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: '23032006yj',
    database: 'doda_pizza_server',
    entities: [ToppingEntity, PizzaEntity, SSBEntity, SnackEntity, PcEntity],
    synchronize: true,
  })