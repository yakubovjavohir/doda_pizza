import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ID } from 'src/common/types';
import { TTEntity } from '../../t-t/entities/t-t.entity';

@Entity('facts')
export class FactsEntity {
      @PrimaryGeneratedColumn('uuid')
      id: ID;
    
      @Column()
      calories: number;
    
      @Column({ type: 'int' })
      protein: number;

      @Column()
      fat:number

      @Column()
      carbohydrate:number
      
      @ManyToOne(() => TTEntity, (tt) => tt.facts, {
        onDelete: 'CASCADE',
      })
      @JoinColumn({ name: 'ttId' })
      tt: TTEntity;
}
    

