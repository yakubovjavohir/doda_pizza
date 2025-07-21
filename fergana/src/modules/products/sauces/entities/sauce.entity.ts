import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn} from 'typeorm';
import { ID } from 'src/common/types';
import { VolumesEntity } from '../../mini-data/volumes/entities/volume.entity';

@Entity('sauces')
export class SaucesEntity {
  @PrimaryGeneratedColumn('uuid')
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

  @OneToMany(() => VolumesEntity, (volume) => volume.sauces)
  volume: VolumesEntity[];  

  @Column({default: false, nullable: true})
  newItem:boolean

  @Column({type:String})
  location:string

  @CreateDateColumn()
  createAt: Date;
}
