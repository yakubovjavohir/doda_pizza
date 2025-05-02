import { Inject, Injectable } from '@nestjs/common';
import { IProfileService } from './interface/profile.service';
import { PROFILE_SERVICE } from 'src/common/config/service.name';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class ProfileService {
  private profileService: IProfileService
  constructor(
    @Inject(PROFILE_SERVICE) private client: ClientGrpc
  ){}
  onModuleInit() {
    this.profileService = this.client.getService<IProfileService>('ProfileService');
  }
  async create(phone:string){
   return this.profileService.Create({phone})
  }

  findOne(phone:string){
    return this.profileService.FindOne({phone})
  }

  updateName(phone:string, name: string) {
    return this.profileService.UpdateName({
      phone,
      name
    })
  }
  updateBirthday(phone:string, birthday: string) {
    return this.profileService.UpdateBirthday({
      phone,
      birthday
    })
  }
  updateEmail(phone:string, email: string) {
    return this.profileService.UpdateEmail({
      phone,
      email
    })
  }
  remove(phone:string) {
    return this.profileService.Logaout({phone})
  }
}
