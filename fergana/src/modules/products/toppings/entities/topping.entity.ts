import { ID } from "src/common/types";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IToppingPrices } from "../interface/prices";
import { PricesEntity } from "../../mini-data/prices/entities/price.entity";

@Entity("topping")
export class ToppingEntity{
    @PrimaryGeneratedColumn()
    id:ID

    @Column({type:String})
    name: string;
    
    @Column({ nullable: true })
    imageUrl: string;
    
    @OneToMany(() => PricesEntity, (prices) => prices.topping)
    prices: PricesEntity[];  

    @Column()
    type:string

    @CreateDateColumn()
    createAt:Date

    @UpdateDateColumn()
    updateAt:Date
    toppingEntity: IToppingPrices;
}
