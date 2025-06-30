import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, BaseEntity } from 'typeorm';
import { ID } from 'src/common/types';
import { VolumesEntity } from '../../mini-data/volumes/entities/volume.entity';
import { IDisavaileabletoppings } from '../../pizza/interface/disavailabletoppings';

@Entity('dessert')
export class DessertEntity{
  @PrimaryGeneratedColumn('uuid')
  id: ID;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: null, type: 'decimal',  name:'fixed__price', nullable:true})
  fixedprice: number | null;

  @Column({ default: false, nullable:true })
  vegetarian: boolean;
  
  @Column()
  imageUrl:string

  @Column({type: 'decimal', default:null, nullable:true})
  price:number | null

  @OneToMany(() => VolumesEntity, (volume) => volume.dessert)
  volume: VolumesEntity[];  

  @CreateDateColumn()
  createAt: Date;
}
