import { Controller, Get, Post, Body} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { IdValidationService } from '../fergana/products/id-validation/id-validation.service';
import { TTService } from '../fergana/products/mini-data/t-t/t-t.service';
import { VolumesService } from '../fergana/products/mini-data/volumes/volumes.service';
import { ToppingsService } from '../fergana/products/toppings/toppings.service';
import { ProductNotFound } from 'src/lib/resdata';


@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly idExistService: IdValidationService,
    private readonly ttService: TTService,
    private readonly volume: VolumesService,
    private readonly topping: ToppingsService
  ) {}

  @Post()
  async create(@Body() dto: CreateOrderDto) {
    if (!dto.items || !Array.isArray(dto.items)) {
      throw new Error('Items array is required and must be an array');
    }
    
    // product validation
    if(dto.items.length > 0){
      for (let i = 0; i < dto.items.length; i++) {
        let id = dto.items[i].productid;
        let type = dto.items[i].type  
        await this.idExistService.id(id, type)

        // tt || variants || topping validation
        const toppings = dto.items[i].toppings;
        const volume = dto.items[i].variants
        const tt = dto.items[i].tt
        if (toppings && toppings.length > 0) {
          for (let a = 0; a < toppings.length; a++) {
            const element = toppings[a];
            const data = await this.topping.findOne(element[a])
            if(!data){
              return new ProductNotFound(element[a], 'topping')
            }
          }
        }

        if (volume && volume.length > 0) {
          for (let a = 0; a < volume.length; a++) {
            const element = volume[a];
            const data = await this.volume.findOne(element[a])
            if(!data){
              return new ProductNotFound(element[a], 'variant')
            }
          }
        }

        if (tt && tt.length > 0) {
          for (let a = 0; a < tt.length; a++) {
            const element = tt[a];
            const data = await this.ttService.findOne(element[a])
            if(!data){
              return new ProductNotFound(element[a], 'tt')
            }
          }
        }
      }
    } else {
      return {
        meta:{
          statusCode:400,
          message:"item is not chacked"
        }
      }
    }





    return this.orderService.create(dto);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }
}
