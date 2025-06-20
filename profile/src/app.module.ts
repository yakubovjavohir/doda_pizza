import { Module } from '@nestjs/common';
import { databaseProvide } from './common/config/database.provide';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [databaseProvide, ProfileModule]
})
export class AppModule {}
