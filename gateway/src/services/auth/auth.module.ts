import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../../common/guard/jwt.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'doda_token',  // Tokenda ishlatiladigan secret
      signOptions: { expiresIn: '7d' }, // Token muddati
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService], // Boshqa modullarda ishlata olamiz
})
export class AuthModule {}
