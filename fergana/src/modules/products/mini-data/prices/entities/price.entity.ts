import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ID } from 'src/common/types';
import { ToppingEntity } from 'src/modules/products/toppings/entities/topping.entity';

@Entity('topping_prices')
export class PricesEntity {
      @PrimaryGeneratedColumn('uuid')
      id: ID;
    
      @Column()
      size: string;
    
      @Column({ type: 'int' })
      price: number;
      
      @ManyToOne(() => ToppingEntity, (topping) => topping.prices, {
        onDelete: 'CASCADE',
      })
      @JoinColumn({ name: 'topping_id' })
      topping: ToppingEntity;
}
    

