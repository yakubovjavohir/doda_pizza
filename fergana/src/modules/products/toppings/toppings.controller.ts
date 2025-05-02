import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod} from '@nestjs/microservices';
import { ToppingsService } from './toppings.service';
import { ToppingEntity } from './entities/topping.entity';

@Controller()
export class ToppingsController {
  constructor(
    @Inject("IToppingService")
    private readonly toppingsService: ToppingsService
  ) {}

  @GrpcMethod("ToppingService", "Create")
  create(dto: ToppingEntity) {
    return this.toppingsService.create(dto);
  }

  @GrpcMethod("ToppingService", "FindAll")
  findAll() {
    return this.toppingsService.findAll();
  }
}
