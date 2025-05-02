import { ResData } from "src/lib/resdata";
import { ProfileEntity } from "../entities/profile.entity";

export interface IProfileService {
    create(dto:ProfileEntity):Promise<ResData<ProfileEntity>> 
    updateName(dto:ProfileEntity):Promise<ResData<ProfileEntity>>
    updateBirthday(dto:ProfileEntity):Promise<ResData<ProfileEntity>>
    updateEmail(dto:ProfileEntity):Promise<ResData<ProfileEntity>>
    logaut(phone:string):Promise<null>
    findOne(phone:string):Promise<ResData<ProfileEntity | null>>
}