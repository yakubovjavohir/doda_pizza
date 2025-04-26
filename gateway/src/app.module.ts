import { Module } from '@nestjs/common';
import { BotModule } from './services/bot/bot.module';
import { ProfileModule } from './services/profile/profile.module';
import { AuthModule } from './services/auth/auth.module';

@Module({
  imports: [BotModule, ProfileModule, AuthModule],
})
export class AppModule {}
