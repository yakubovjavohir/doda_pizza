import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, BaseEntity } from 'typeorm';
import { ID } from 'src/common/types';
import { VolumesEntity } from '../../mini-data/volumes/entities/volume.entity';
import { ToppingEntity } from '../../toppings/entities/topping.entity';

@Entity('coffee')
export class CoffeeEntity {
  @PrimaryGeneratedColumn()
  id: ID;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: null, type: 'decimal',  name:'fixed__price', nullable:true})
  fixedprice: number | null;

  @Column()
  imageUrl:string

  @Column({type: 'decimal', default:null, nullable:true})
  price:number | null

  @OneToMany(() => VolumesEntity, (volume) => volume.coffee)
  volume: VolumesEntity[];  

  @Column({type: 'jsonb', default: [], nullable:true})  
  topping: ToppingEntity[];

  @CreateDateColumn()
  createAt: Date;
  product: any;
  type: any;
}
