import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, BaseEntity } from 'typeorm';
import { ID } from 'src/common/types';
import { VolumesEntity } from '../../mini-data/volumes/entities/volume.entity';

@Entity('drink')
export class DrinkEntity{
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

  @Column({default:false})
  gaz:boolean

  @Column()
  imageUrl:string

  @Column({type: 'decimal', default:null, nullable:true})
  price:number | null

  @OneToMany(() => VolumesEntity, (volume) => volume.drink)
  volume: VolumesEntity[];  

  @CreateDateColumn()
    createAt: Date;

    @CreateDateColumn()
    updateAt: Date;
}
