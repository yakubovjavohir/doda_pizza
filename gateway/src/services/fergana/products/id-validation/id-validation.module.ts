import { forwardRef, Module } from '@nestjs/common';
import { DessertModule } from '../dessert/dessert.module';
import { PizzaModule } from '../pizza/pizza.module';
import { SaucesModule } from '../sauces/sauces.module';
import { SnacksModule } from '../snacks/snacks.module';
import { CoffeeModule } from '../coffee/coffee.module';
import { DrinksModule } from '../drinks/drinks.module';
import { BreakfastModule } from '../breakfast/breakfast.module';
import { KidsFaveModule } from '../kids-fave/kids-fave.module';
import { VolumesModule } from '../mini-data/volumes/volumes.module';
import { TTModule } from '../mini-data/t-t/t-t.module';
import { ToppingsModule } from '../toppings/toppings.module';
import { IdValidationService } from './id-validation.service';

@Module({
  imports:[
    DessertModule, 
    PizzaModule, 
    SaucesModule, 
    SnacksModule, 
    CoffeeModule, 
    DrinksModule, 
    BreakfastModule, 
    KidsFaveModule,
    forwardRef(() => VolumesModule), 
    forwardRef(() => TTModule), 
    forwardRef(() => ToppingsModule)],
  providers: [IdValidationService],
  exports:[IdValidationService]
})
export class IdValidationModule {}
