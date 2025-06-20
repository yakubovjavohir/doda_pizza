import { InjectRepository } from "@nestjs/typeorm";
import { ProfileEntity } from "./entities/profile.entity";
import { IProfileRepository } from "./interface/profile.repository";
import { Repository } from "typeorm";

export class ProfileRepository implements IProfileRepository {
    constructor(
        @InjectRepository(ProfileEntity)
        private readonly profile:Repository<ProfileEntity>
    ){}    
    async findOne(email: string): Promise<ProfileEntity | null> {
        const data = await this.profile.findOne({
            where:{
                email
            }
        })
        return data
    }
    async create(dto: ProfileEntity): Promise<ProfileEntity> {
        const data = this.profile.create({...dto})
        return await this.profile.save(data)
    }
    async updateName(email: string, name: string): Promise<ProfileEntity | null> {
        await this.profile.update({email}, {name})
        return await this.profile.findOne({
            where:{
                email
            }
        })
    }
    async updateBirthday(email: string, birthday: string): Promise<ProfileEntity | null> {
        await this.profile.update({email}, {birthday})
        return await this.profile.findOne({
            where:{
                email
            }
        })
    }
    async updateEmail(email: string, phone: string): Promise<ProfileEntity | null> {
        await this.profile.update({email}, {phone})
        return await this.profile.findOne({
            where:{
                email
            }
        })
    }
    async logaut(email: string): Promise<null> {
        await this.profile
        .createQueryBuilder()
        .delete()
        .from(ProfileEntity)
        .where('email = :email', { email })
        .execute();
        return null
    }

}