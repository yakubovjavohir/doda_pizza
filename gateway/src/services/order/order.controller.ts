import { Controller, Get, Post, Body} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { IdValidationService } from '../fergana/products/id-validation/id-validation.service';
import { ProductNotFound } from 'src/lib/resdata';
import { ID } from 'src/common/TYPES';

@Controller('my/order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly idExistService: IdValidationService,
  ) {}

  @Post()
  async create(@Body() dto: CreateOrderDto) {

    if (!dto.items || !Array.isArray(dto.items)) {
      throw new Error('Items array is required and must be an array');
    }


    const totalPrice = dto.totalprice
    
    var allProductsPrice : number = 0

    const item = dto.items
    

    // product validation
    if(item.length > 0){
      for (let i = 0; i < item.length; i++) {
        let element = item[i];
        
        let product = await this.idExistService.id(element.id, element.type);
        
        if(!product){
          throw new ProductNotFound(element.id, element.type)
        }

        
        // variants and topping validation 
        let variantId = element.variant?.id as ID
        
        if(element.variant?.type === "thin" || "traditional" || "pizza" || "snack" || "dessert" || "coffee" || "volume" || "sauces" || "drink" || "breakfast" || "topping" || "prices"){
          
          let variants = await this.idExistService.id(variantId, element.variant?.type as string)
          
          if(!variants){
            throw new ProductNotFound(variantId, element.type)
          }
          
          if (element.toppings && element.toppings.length > 0) {
            for (let a = 0; a < element.toppings.length; a++) {
              let pricesId = element.toppings[a].toppingPrices.id as unknown as ID
              let toppingId = element.toppings[a].id as unknown as ID;

              const topping = await this.idExistService.id(toppingId, "topping")
              if (!topping) {
                throw new ProductNotFound(toppingId, "topping")
              }

              const prices = await this.idExistService.id(pricesId, "prices")
              if (!prices) {
                throw new ProductNotFound(pricesId, "prices")
              }

              allProductsPrice += element.toppings[a].toppingPrices.price
            }
          }
        } else {
          return {
            statusCode:400,
            message:"type is not wrong"
          }
        }


        // totalPrice inspection
        if (
          element.variant?.price !== undefined &&
          element.quantity !== undefined &&
          element.variant.price * element.quantity === element.productTotalPrice
        ) {
          allProductsPrice += element.productTotalPrice;
        } else {
          return {
            statusCode:400,
            message:"frontend you are wrong price --- ( id = " + variantId + ")" 
          }
        }



      }

      if(totalPrice === allProductsPrice){
        return this.orderService.create(dto);
      } else {
        console.log(totalPrice + '==' + allProductsPrice);
        
        return {
          statusCode:400,
          message: "totalPrice and allProductPrice are wrong!"
        }
      }

    } else {
      return {
        statusCode:400,
        message:"Item is not found"
      }
    }
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }
}
