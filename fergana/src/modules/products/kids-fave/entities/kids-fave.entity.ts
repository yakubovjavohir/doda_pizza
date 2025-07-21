import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { ID } from 'src/common/types';

@Entity('kids_fave')
export class KidsFaveEntity {
  @PrimaryGeneratedColumn('uuid')
  id: ID;

  @Column()
  type:string

  @Column()
  product: ID
  
  @Column({ default: false })
  spicy: boolean;

  @Column({ default: true })
  kidsFriendly: boolean;

  @Column({ type: 'int', nullable: true })
  recommendedAge: number;

  @Column({default: false, nullable: true})
  newItem:boolean

  @Column({type:String})
  location:string

  @CreateDateColumn()
  createAt: Date;
}