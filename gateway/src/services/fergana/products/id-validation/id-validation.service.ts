import { Injectable } from '@nestjs/common';
import { DessertService } from '../dessert/dessert.service';
import { PizzaService } from '../pizza/pizza.service';
import { SnacksService } from '../snacks/snacks.service';
import { SaucesService } from '../sauces/sauces.service';
import { CoffeeService } from '../coffee/coffee.service';
import { BreakfastService } from '../breakfast/breakfast.service';
import { DrinksService } from '../drinks/drinks.service';
import { ID } from 'src/common/TYPES';
import { TTService } from '../mini-data/t-t/t-t.service';
import { VolumesService } from '../mini-data/volumes/volumes.service';
import { ToppingsService } from '../toppings/toppings.service';
import { PizzaData } from '../pizza/interface/pizza.service';
import { DrinksData } from '../drinks/interface/drinks.service';
import { DessertData } from '../dessert/interface/dessert.service';
import { SaucesData } from '../sauces/interface/sauces.service';
import { SnackData } from '../snacks/interface/snack.service';
import { CoffeeData } from '../coffee/interface/coffee.service';
import { BreakfastData } from '../breakfast/interface/breakfast.service';
import { TTData } from '../mini-data/t-t/interface/t-t.service';
import { VolumesData } from '../mini-data/volumes/interface/volumes.service';
import { ToppingData } from '../toppings/interface/toppings.service';

@Injectable()
export class IdValidationService {
    constructor(
        private readonly dessert : DessertService,
        private readonly pizza : PizzaService,
        private readonly snack : SnacksService,
        private readonly sauces : SaucesService,
        private readonly coffee : CoffeeService,
        private readonly breakfast : BreakfastService,
        private readonly drink : DrinksService,
        private readonly traditional_and_thin : TTService,
        private readonly volume : VolumesService,
        private readonly topping : ToppingsService
    ){}

    async id(id:ID, type:string){
        if(type === "pizza"){
            return (await this.pizza.findOne(id)).data as unknown as PizzaData
        }
        if(type === "dessert"){
            return (await this.dessert.findOne(id)).data as unknown as DessertData
        }
        if(type === "drink"){
            return (await this.drink.findOne(id)).data as unknown as DrinksData
        }
        if(type === "sauces"){
            return (await this.sauces.findOne(id)).data as unknown as SaucesData
        }
        if(type === "snack"){
            return (await this.snack.findOne(id)).data as unknown as SnackData
        }
        if(type === "coffee"){
            const data = await this.coffee.findOne(id) as unknown as CoffeeData
            console.log('data', data);
            return data
        }
        if(type === "breakfast"){
            return (await this.breakfast.findOne(id)).data as unknown as BreakfastData
        }
        if(type === "traditional_and_thin" || type === "thin"){
            return (await this.traditional_and_thin.findOne(id)).data as unknown as TTData
        }
        if(type === "volume"){
            return (await this.volume.findOne(id)).data as unknown as VolumesData
        }
        if(type === "topping"){
            return (await this.topping.findOne(id)).data as unknown as ToppingData
        }
    }   
}
