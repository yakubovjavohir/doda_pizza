import { ProfileEntity } from "../entities/profile.entity";

export interface IProfileRepository {  
    create(dto:ProfileEntity):Promise<ProfileEntity> 
    updateName(phone:string, name:string):Promise<ProfileEntity | null>
    updateBirthday(phone:string, birthday:string):Promise<ProfileEntity | null>
    updateEmail(phone:string, email:string):Promise<ProfileEntity | null>
    findOne(phone:string):Promise<ProfileEntity | null>
}