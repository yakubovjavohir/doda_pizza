// product-size.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SnackEntity } from '../../entities/snack.entity';
import { ID } from 'src/common/types';

@Entity('ssb')
export class SSBEntity {
  @PrimaryGeneratedColumn()
  id: ID;

  @Column()
  name: string;

  @Column()
  gram: string;

  @Column({type:String})
  price: string;

  @Column()
  imageUrl: string;

  @ManyToOne(() => SnackEntity, (snack) => snack.ssb, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'snackId' })
  snack: SnackEntity;
}
