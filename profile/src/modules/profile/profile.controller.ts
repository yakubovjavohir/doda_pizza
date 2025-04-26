import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProfileService } from './profile.service';
import { ProfileEntity } from './entities/profile.entity';

@Controller()
export class ProfileController {
  constructor(
    @Inject("IProfileService")
    private readonly profileService: ProfileService
  ) {}

  @GrpcMethod('ProfileService', 'Create')
  create(dto:ProfileEntity) {
    return this.profileService.create(dto);
  }

  @GrpcMethod('ProfileService', 'UpdateName')
  updateName(dto:ProfileEntity) {
    return this.profileService.updateName(dto);
  }

  @GrpcMethod('ProfileService', 'UpdateBirthday')
  updateBirthday(dto:ProfileEntity) {
    return this.profileService.updateBirthday(dto);
  }

  @GrpcMethod('ProfileService', 'UpdateEmail')
  updateEmail(dto:ProfileEntity) {
    return this.profileService.updateEmail(dto);
  }

  @GrpcMethod('ProfileService', "Logaout")
  remove(dto:ProfileEntity) {
    return this.profileService.logaut(dto.phone);
  }
}
