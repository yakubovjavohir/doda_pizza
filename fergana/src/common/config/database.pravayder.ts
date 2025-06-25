import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeEntity } from 'src/modules/products/coffee/entities/coffee.entity';
import { DessertEntity } from 'src/modules/products/dessert/entities/dessert.entity';
import { DrinkEntity } from 'src/modules/products/drinks/entities/drink.entity';
import { MilkshakesEntity } from 'src/modules/products/milkshakes/entities/milkshake.entity';
import { FactsEntity } from 'src/modules/products/mini-data/facts/entities/fact.entity';
import { PricesEntity } from 'src/modules/products/mini-data/prices/entities/price.entity';
import { TTEntity } from 'src/modules/products/mini-data/t-t/entities/t-t.entity';
import { VolumesEntity } from 'src/modules/products/mini-data/volumes/entities/volume.entity';
import { PizzaEntity } from 'src/modules/products/pizza/entities/pizza.entity';
import { SaucesEntity } from 'src/modules/products/sauces/entities/sauce.entity';
import { SnackEntity } from 'src/modules/products/snacks/entities/snack.entity';
import { ToppingEntity } from 'src/modules/products/toppings/entities/topping.entity';
import { BreakfastEntity } from 'src/modules/products/breakfast/entities/breakfast.entity';
import { KidsFaveEntity } from 'src/modules/products/kids-fave/entities/kids-fave.entity';

export const databasePravader = TypeOrmModule.forRoot({
    type: 'postgres',
    host: '172.17.0.1', // 172.17.0.1
    port: 5432,
    username: 'postgres',
    password: '23032006yj',
    database: 'dodo_pizza_base',
    entities: [
      ToppingEntity, 
      PizzaEntity, 
      SnackEntity, 
      DessertEntity, 
      TTEntity, 
      DrinkEntity,
      PricesEntity,
      FactsEntity,
      VolumesEntity,
      CoffeeEntity,
      SaucesEntity,
      MilkshakesEntity,
      BreakfastEntity,
      KidsFaveEntity
    ],
    synchronize: true,
  })