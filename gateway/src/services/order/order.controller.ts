import { Controller, Get, Post, Body} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { IdValidationService } from '../fergana/products/id-validation/id-validation.service';


@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly idExistService: IdValidationService
  ) {}

  @Post()
  async create(@Body() dto: CreateOrderDto) {
    for (let i = 0; i < dto.items.length; i++) {
      const id = dto.items[i].productid;
      const type = dto.items[i].type;
      await this.idExistService.id(id, type)
    }
    return this.orderService.create(dto);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }
}
