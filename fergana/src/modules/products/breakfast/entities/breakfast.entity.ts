import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { ID } from 'src/common/types';
import { VolumesEntity } from '../../mini-data/volumes/entities/volume.entity';
import { IDisavaileabletoppings } from '../../pizza/interface/disavailabletoppings';

@Entity('breakfast')
export class BreakfastEntity {
  @PrimaryGeneratedColumn('uuid')
  id: ID;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: null, type: 'decimal', name:'fixed__price', nullable:true})
  fixedprice: number | null;

  @Column({ default: false, nullable:true })
  vegetarian: boolean;

  @Column('json', { name: 'dis_available_toppings', nullable: true, default: [] })
  disavailabletoppings: IDisavaileabletoppings[] | null; 

  @Column()
  imageUrl: string;

  @Column({type: 'decimal', default:null, nullable:true})
  price: number | null;

  @OneToMany(() => VolumesEntity, (volume) => volume.breakfast, {
    cascade: true,
    eager: true
  })
  volume: VolumesEntity[];

  @Column({default: false, nullable: true})
  newItem:boolean

  @Column({type:String})
  location:string

  @CreateDateColumn()
  createAt: Date;
}
