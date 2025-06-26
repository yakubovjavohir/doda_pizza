import { ID } from "src/common/types";
import { PizzaEntity } from "src/modules/products/pizza/entities/pizza.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { FactsEntity } from "../../facts/entities/fact.entity";

@Entity('traditional_and_thin')
export class TTEntity {
    @PrimaryGeneratedColumn('uuid')
    id:ID

    @Column()
    size:string

    @Column()
    sm:number

    @Column()
    imageUrl:string

    @Column()
    weight:number

    @Column()
    price:number

    @ManyToOne(() => PizzaEntity, (pizza) => pizza.tt, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'ttId' })
    pizza: PizzaEntity;

    @OneToMany(() => FactsEntity, (facts) => facts.tt)
    facts: FactsEntity[];

    @CreateDateColumn()
    createAt:Date

    @UpdateDateColumn()
    updateAt:Date
}
