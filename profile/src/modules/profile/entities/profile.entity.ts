import { ID } from "src/common/types"
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("profile")
export class ProfileEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:ID

    @Column({type:String})
    name:string

    @Column({type:'text', nullable:false})
    phone:string

    @Column({type:String})
    birthday:string

    @Column({type:String})
    email:String

    @Column({type:String, default:0})
    bonuse:string

    @CreateDateColumn()
    createAt:Date

    @UpdateDateColumn()
    updateAt:Date
}
