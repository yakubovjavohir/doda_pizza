import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { ProfileRepository } from './profile.repository';

@Module({
  imports:[TypeOrmModule.forFeature([ProfileEntity])],
  controllers: [ProfileController],
  providers: [
    {provide:"IProfileRepository", useClass:ProfileRepository},
    {provide:"IProfileService", useClass:ProfileService},
  ],
})
export class ProfileModule {}
