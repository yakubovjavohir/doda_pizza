import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, BaseEntity } from 'typeorm';
import { ID } from 'src/common/types';
import { VolumesEntity } from '../../mini-data/volumes/entities/volume.entity';

@Entity('snacks')
export class SnackEntity{
  @PrimaryGeneratedColumn()
  id: ID;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: null, type: 'decimal',  name:'fixed__price', nullable:true})
  fixedprice: number | null;

  @Column({ default: false, nullable:true })
  vegetarian: boolean;

  @Column("text", { array: true, name:'dis_available_toppings', default:[], nullable:true})
  disavailabletoppings: string[];

  @Column({ default: false, nullable:true })
  pepper: boolean;

  @Column({type:String})
  imageUrl:string

  @Column({type: 'decimal', default:null, nullable:true})
  price:number | null

  @OneToMany(() => VolumesEntity, (volume) => volume.snack)
  volume: VolumesEntity[];

  @CreateDateColumn()
  createAt: Date;
}
