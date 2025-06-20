import { Controller, Body, Delete, Patch, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateBirthdayProfileDto, UpdateEmailProfileDto, UpdateNameProfileDto } from './dto/update-profile.dto';

@Controller()
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService,
  ) {}
  @Patch(':email/name')
  updateName(@Param('email') email: string, @Body() dto: UpdateNameProfileDto) {
    return this.profileService.updateName(email, dto.name);
  }
  
  @Patch(':email/birthday')
  updateBirthday(@Param('email') email: string, @Body() dto: UpdateBirthdayProfileDto) {
    return this.profileService.updateBirthday(email, dto.birthday);
  }
  
  @Patch(':email/phone')
  updateEmail(@Param('email') email: string, @Body() dto: UpdateEmailProfileDto) {
    return this.profileService.updateEmail(email, dto.email);
  }

  @Delete(':email')
  remove(@Param('email') email: string,) {
    return this.profileService.remove(email);
  }
}
