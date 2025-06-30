import { ID } from 'src/common/types';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
export interface Item {
  productid:ID
  type:string
  quantity:number
  price:number
  variants:ID[]
  topping:ID[]
  tt:ID[]
}
@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id:ID;

  @Column({type:'text'})
  user:ID;

  @Column('decimal', {name:'total_price'})
  totalprice:number;

  @Column({ default: 'pending' })
  status: 'pending' | 'paid' | 'delivered';
  @Column()
  address:string

  @Column({ type: 'jsonb' }) 
  items: Item[];

  @CreateDateColumn()
  createAt: Date;
}
