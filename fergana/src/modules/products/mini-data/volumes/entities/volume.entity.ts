import { ID } from "src/common/types";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SnackEntity } from "src/modules/products/snacks/entities/snack.entity";
import { DessertEntity } from "src/modules/products/dessert/entities/dessert.entity";
import { DrinkEntity } from "src/modules/products/drinks/entities/drink.entity";
import { CoffeeEntity } from "src/modules/products/coffee/entities/coffee.entity";
import { SaucesEntity } from "src/modules/products/sauces/entities/sauce.entity";
import { MilkshakesEntity } from "src/modules/products/milkshakes/entities/milkshake.entity";
import { BreakfastEntity } from "src/modules/products/breakfast/entities/breakfast.entity";

@Entity('volume')
export class VolumesEntity {
    @PrimaryGeneratedColumn()
    id:ID

    @Column()
    size:string

    @Column()
    imageUrl:string

    @Column()
    weight:number

    @Column()
    price:number

    @Column()
    type:string

    @ManyToOne(() => SnackEntity, (snack) => snack.volume, {
        onDelete: 'CASCADE',
        nullable: true
    })
    @JoinColumn({ name: 'snack_id'})
    snack: SnackEntity;

    @ManyToOne(() => DessertEntity, (dessert) => dessert.volume, {
        onDelete: 'CASCADE',
        nullable: true
    })
    @JoinColumn({ name: 'dessert_id' })
    dessert: DessertEntity;

    @ManyToOne(() => DrinkEntity, (drink) => drink.volume, {
        onDelete: 'CASCADE',
        nullable: true
    })
    @JoinColumn({ name: 'drink_id' })
    drink: DrinkEntity;

    @ManyToOne(() => CoffeeEntity, (coffee) => coffee.volume, {
        onDelete: 'CASCADE',
        nullable: true
    })
    @JoinColumn({ name: 'coffee_id' })
    coffee: CoffeeEntity;

    @ManyToOne(() => SaucesEntity, (sauces) => sauces.volume, {
        onDelete: 'CASCADE',
        nullable: true
    })
    @JoinColumn({ name: 'sauces_id' })
    sauces: SaucesEntity;

    @ManyToOne(() => MilkshakesEntity, (milkshakes) => milkshakes.volume, {
        onDelete: 'CASCADE',
        nullable: true
    })
    @JoinColumn({ name: 'milkshakes_id' })
    milkshakes: MilkshakesEntity;

    @ManyToOne(() => BreakfastEntity, (breakfast) => breakfast.volume, {
        onDelete: 'CASCADE',
        nullable: true
    })
    @JoinColumn({ name: 'breakfast_id' })
    breakfast: BreakfastEntity;

    @CreateDateColumn()
    createAt:Date

    product: SnackEntity | DessertEntity | BreakfastEntity | DrinkEntity | CoffeeEntity | SaucesEntity | MilkshakesEntity;
}
