import { Controller, Get } from '@nestjs/common';
import { PizzaService } from '../products/pizza/pizza.service';
import { SnacksService } from '../products/snacks/snacks.service';
import { DessertService } from '../products/dessert/dessert.service';
import { DrinksService } from '../products/drinks/drinks.service';
import { CoffeeService } from '../products/coffee/coffee.service';
import { SaucesService } from '../products/sauces/sauces.service';
import { BreakfastService } from '../products/breakfast/breakfast.service';

@Controller('fergana/menu')
export class MenuController {
  constructor(
    private readonly pizzaService: PizzaService,
    private readonly snacksService: SnacksService,
    private readonly dessertService: DessertService,
    private readonly drinksService: DrinksService,
    private readonly coffeeService: CoffeeService,
    private readonly saucesService: SaucesService,
    private readonly breakfastService: BreakfastService
  ) {}

  @Get()
  async findAll() {
    let data: any[] = []
    const pizzas = await this.pizzaService.findAll();
    console.log(pizzas);
    
    if (pizzas.data.length > 0) {
      pizzas.data.forEach(el => data.push({ ...el, type: 'pizza' }));
    }
    
    const snacks = await this.snacksService.findAll();
    console.log(snacks);
    
    if (snacks.data.length > 0) {
      snacks.data.forEach(el => data.push({ ...el, type: 'snacks' }));
    }
    
    const desserts = await this.dessertService.findAll();
    console.log(desserts);
    
    if (desserts.data.length > 0) {
      desserts.data.forEach(el => data.push({ ...el, type: 'dessert' }));
    }
    
    const drink = await this.drinksService.findAll();
    console.log(drink);
    
    if (drink.data.length > 0) {
      drink.data.forEach(el => data.push({ ...el, type: 'drink' }));
    }
    
    const saucesS = await this.saucesService.findAll();
    console.log(saucesS);
    
    if (saucesS.data.length > 0) {
      saucesS.data.forEach(el => data.push({ ...el, type: 'sauces' }));
    }
    
    const coffee = await this.coffeeService.findAll();
    console.log(coffee);
    
    if (coffee.data.length > 0) {
      coffee.data.forEach(el => data.push({ ...el, type: 'coffee' }));
    }
    
    const breakfast = await this.breakfastService.findAll();
    console.log(breakfast);
    
    if (breakfast.data.length > 0) {
      breakfast.data.forEach(el => data.push({ ...el, type: 'breakfast' }));
    }
    

    return {
      meta:{
        statusCode:200,
        message:"this full data"
      },
      data
    }
  }
}
