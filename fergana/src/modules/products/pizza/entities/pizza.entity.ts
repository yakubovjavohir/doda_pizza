import { ID } from "src/common/types";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IImageOption } from "../interface/pizza";
import { ToppingEntity } from "../../toppings/entities/topping.entity";
import { TTEntity } from "../../mini-data/t-t/entities/t-t.entity";


@Entity('pizza')
export class PizzaEntity{
    @PrimaryGeneratedColumn()
    id:ID

    @Column({type:String, nullable:false})
    name:string

    @Column({type: 'decimal', default:null, nullable:true})
    price:number | null

    @Column({type:String, nullable:false})
    description:string

    @Column({ default: null, type: 'decimal',  name:'fixed__price', nullable:true})
    fixedprice: number | null;

    @Column({ default: false, nullable:true })
    vegetarian: boolean;

    @Column("text", { array: true, name:'dis_available_toppings', default:[], nullable:true})
    disavailabletoppings: string[];

    @Column({ default: false, nullable:true })
    pepper: boolean;
    
    @Column('jsonb', { default: [], nullable:false })
    imageUrl:IImageOption[]

    @Column({type: 'jsonb', default: [], nullable:true})  
    topping: ToppingEntity[];

    @OneToMany(() => TTEntity, (tt) => tt.pizza)
    tt: TTEntity[];

    @CreateDateColumn()
    createAt:Date

    @UpdateDateColumn()
    updateAt:Date
}
