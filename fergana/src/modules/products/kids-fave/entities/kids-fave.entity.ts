import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { ID } from 'src/common/types';

@Entity('kids_fave')
export class KidsFaveEntity {
  @PrimaryGeneratedColumn()
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

  @CreateDateColumn()
  createAt: Date;
}