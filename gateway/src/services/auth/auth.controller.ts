import { Controller, Post, Body, Req, UnauthorizedException, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('verify')
  async verify(@Req() req: Request) {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token is missing or malformed');
    }
    const token = authHeader.split(' ')[1];
    const data = await this.authService.verifyToken(token);
    return { valid: true, data };
  }
}
