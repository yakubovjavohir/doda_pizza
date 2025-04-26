import { InjectRepository } from "@nestjs/typeorm";
import { ProfileEntity } from "./entities/profile.entity";
import { IProfileRepository } from "./interface/profile.repository";
import { Repository } from "typeorm";

export class ProfileRepository implements IProfileRepository {
    constructor(
        @InjectRepository(ProfileEntity)
        private readonly profile:Repository<ProfileEntity>
    ){}    
    async findOne(phone: string): Promise<ProfileEntity | null> {
        const data = await this.profile.findOne({
            where:{
                phone
            }
        })
        return data
    }
    async create(dto: ProfileEntity): Promise<ProfileEntity> {
        const data = this.profile.create({...dto})
        return await this.profile.save(data)
    }
    async updateName(phone: string, name: string): Promise<ProfileEntity | null> {
        await this.profile.update({phone}, {name})
        return await this.profile.findOne({
            where:{
                phone
            }
        })
    }
    async updateBirthday(phone: string, birthday: string): Promise<ProfileEntity | null> {
        await this.profile.update({phone}, {birthday})
        return await this.profile.findOne({
            where:{
                phone
            }
        })
    }
    async updateEmail(phone: string, email: string): Promise<ProfileEntity | null> {
        await this.profile.update({phone}, {email})
        return await this.profile.findOne({
            where:{
                phone
            }
        })
    }
    async logaut(phone: string): Promise<null> {
        await this.profile
        .createQueryBuilder()
        .delete()
        .from(ProfileEntity)
        .where('phone = :phone', { phone })
        .execute();
        return null
    }

}