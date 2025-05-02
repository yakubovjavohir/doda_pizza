import { Controller, Body, Delete, Post, Patch, Param, UseGuards, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateBirthdayProfileDto, UpdateEmailProfileDto, UpdateNameProfileDto } from './dto/update-profile.dto';
import { JwtAuthGuard } from 'src/common/guard/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService,
  ) {}
  @Patch(':phone/name')
  @UseGuards(JwtAuthGuard) 
  @ApiBearerAuth()
  updateName(@Param('phone') phone: string, @Body() dto: UpdateNameProfileDto) {
    return this.profileService.updateName(phone, dto.name);
  }
  
  @Patch(':phone/birthday')
  updateBirthday(@Param('phone') phone: string, @Body() dto: UpdateBirthdayProfileDto) {
    return this.profileService.updateBirthday(phone, dto.birthday);
  }
  
  @Patch(':phone/email')
  updateEmail(@Param('phone') phone: string, @Body() dto: UpdateEmailProfileDto) {
    return this.profileService.updateEmail(phone, dto.email);
  }

  @Delete(':phone')
  remove(@Param('phone') phone: string,) {
    return this.profileService.remove(phone);
  }
}
