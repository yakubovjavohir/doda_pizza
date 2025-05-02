import { ID } from "src/common/types";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IImageOption } from "../interface/pizza";
import { ToppingEntity } from "../../toppings/entities/topping.entity";


@Entity('pizza')
export class PizzaEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:ID

    @Column({type:String})
    name:string

    @Column({type:String})
    price:string

    @Column({type:String})
    description:string

    @Column('jsonb', { default: [] })
    toppings:ToppingEntity[]

    @Column('jsonb', { default: [] })
    imageUrl:IImageOption[]

    @CreateDateColumn()
    createAt:Date

    @UpdateDateColumn()
    updateAt:Date
}
