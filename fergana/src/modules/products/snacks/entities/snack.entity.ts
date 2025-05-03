import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { SSBEntity } from '../ssb/entities/ssb.entity';
import { PcEntity } from '../pc/entities/pc.entity';
import { ID } from 'src/common/types';

@Entity('snacks')
export class SnackEntity {
  @PrimaryGeneratedColumn()
  id: ID;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => SSBEntity, (ssb) => ssb.snack)
  ssb: SSBEntity[];
  
  @OneToMany(() => PcEntity, (pcs) => pcs.snack)
  pcs: PcEntity[];

  @CreateDateColumn()
    createAt: Date;

    @CreateDateColumn()
    updateAt: Date;
}
