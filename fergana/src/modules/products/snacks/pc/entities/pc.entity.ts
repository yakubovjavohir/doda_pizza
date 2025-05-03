import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SnackEntity } from '../../entities/snack.entity';
import { ID } from 'src/common/types';

@Entity('pc')
export class PcEntity {
  @PrimaryGeneratedColumn()
  id: ID;

  @Column()
  pc: string; 

  @Column()
  gram: string;

  @Column({type:String})
  price: string;

  @Column()
  imageUrl: string;

  @ManyToOne(() => SnackEntity, (snack) => snack.pcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'snackId' })
  snack: SnackEntity;
}
