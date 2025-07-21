import { ID } from 'src/common/types';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
export interface Item {
  type: string;
  id: string;
  name: string;
  imageUrl: string;
  quantity: number;
  productTotalPrice: number;
  variant?: {
      id: string;
      type?: "thin" | "traditional" | string;
      size?: string;
      weight?: number;
      price?: number;
      imageUrl?: string;
  } | null;
  toppings?: {
      id: string;
      name: string;
      toppingPrices: {
        id:string,
        sm:string,
        price:number,
      },
      imageUrl:string
  }[] | null;
  disabledToppings?: {
      id: string;
      name: string;
  }[] | null;
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
