import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, BaseEntity } from 'typeorm';
import { ID } from 'src/common/types';
import { VolumesEntity } from '../../mini-data/volumes/entities/volume.entity';
import { IDisavaileabletoppings } from '../../pizza/interface/disavailabletoppings';
import { ToppingEntity } from '../../toppings/entities/topping.entity';

@Entity('snacks')
export class SnackEntity{
  @PrimaryGeneratedColumn('uuid')
  id: ID;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: null, type: 'decimal',  name:'fixed__price', nullable:true})
  fixedprice: number | null;

  @Column({ default: false, nullable:true })
  vegetarian: boolean;

  @Column('json', { name: 'dis_available_toppings', nullable: true, default: [] })
  disavailabletoppings: IDisavaileabletoppings[] | null; 

  @Column({ default: false, nullable:true })
  pepper: boolean;

  @Column({type:String})
  imageUrl:string

  @Column({type: 'decimal', default:null, nullable:true})
  price:number | null

  @Column({type: 'jsonb', default: [], nullable:true})  
  topping: ToppingEntity[];

  @OneToMany(() => VolumesEntity, (volume) => volume.snack)
  volume: VolumesEntity[];
  
  @Column({default: false, nullable: true})
  newItem:boolean

  @Column({type:String})
  location:string

  @CreateDateColumn()
  createAt: Date;
}
