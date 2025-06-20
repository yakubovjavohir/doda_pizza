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
  async create(email:string){
   return this.profileService.Create({email})
  }

  findOne(email:string){
    return this.profileService.FindOne({email})
  }

  updateName(email:string, name: string) {
    return this.profileService.UpdateName({
      email,
      name
    })
  }
  updateBirthday(email:string, birthday: string) {
    return this.profileService.UpdateBirthday({
      email,
      birthday
    })
  }
  updateEmail(email:string, phone: string) {
    return this.profileService.UpdateEmail({
      email,
      phone
    })
  }
  remove(email:string) {
    return this.profileService.Logaout({email})
  }
}
