import { ID } from "src/common/types";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IToppingPrices } from "../interface/prices";

@Entity("topping")
export class ToppingEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:ID

    @Column({type:String})
    name: string;
  
    @Column('jsonb', { default: [] })
    prices: IToppingPrices[];
  
    @Column({ nullable: true })
    imageUrl: string;

    @CreateDateColumn()
    createAt:Date

    @UpdateDateColumn()
    updateAt:Date
  toppingEntity: IToppingPrices;
}
