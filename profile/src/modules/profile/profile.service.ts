import { Inject, Injectable } from '@nestjs/common';
import { IProfileService } from './interface/profile.service';
import { ProfileEntity } from './entities/profile.entity';
import { ProfileRepository } from './profile.repository';
import { ResData } from 'src/lib/resdata';

@Injectable()
export class ProfileService implements IProfileService{
  constructor(
    @Inject("IProfileRepository")
    private readonly profileRepository : ProfileRepository
  ){}
  async findOne(email: string): Promise<ResData<ProfileEntity | null>> {
    const data = await this.profileRepository.findOne(email)
    if(!data){
      return new ResData<null>(404, "phone not found", data)
    }

    const resdata = new ResData<ProfileEntity>(200, "success", data)
    return resdata
  }
  async create(dto: ProfileEntity): Promise<ResData<ProfileEntity>> {
      const findData = await this.profileRepository.findOne(dto.email as string)
    
    if(findData){
      const resdata = new ResData<ProfileEntity>(200, "exist profile ", findData)
      return resdata
    }
    const data = new ProfileEntity();
    data.id = Number();
    data.name = "";
    data.phone = "";
    data.birthday = "";
    data.email = dto.email;
    data.createAt = new Date();
    data.updateAt = new Date();
    
    const newDto = await this.profileRepository.create(data);
    const resdata = new ResData<ProfileEntity>(201, "create profile", newDto)
    return resdata
  }
  async updateName(dto: ProfileEntity): Promise<ResData<ProfileEntity>> {
    const data = await this.profileRepository.updateName(dto.email as string, dto.name)
    const resdata = new ResData<ProfileEntity>(200, "updated name", data)
    return resdata
  }
  async updateBirthday(dto: ProfileEntity): Promise<ResData<ProfileEntity>> {
    const data = await this.profileRepository.updateBirthday(dto.email as string, dto.birthday)
    const resdata = new ResData<ProfileEntity>(200, "updated birthday", data)
    return resdata
  }
  async updateEmail(dto: ProfileEntity): Promise<ResData<ProfileEntity>> {
    const data = await this.profileRepository.updateEmail(dto.email as string, dto.phone as string)
    const resdata = new ResData<ProfileEntity>(200, "updated email", data)
    return resdata
  }
  async logaut(email: string): Promise<null> {
    return await this.profileRepository.logaut(email)
  }
}
