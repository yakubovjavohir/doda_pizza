import { HttpService } from '@nestjs/axios';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as jwksClient from 'jwks-rsa';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  private jwksClient = jwksClient({
    jwksUri: 'https://u9sgmd.logto.app/oidc/jwks'
  });

  private getKey(header: jwt.JwtHeader, callback: jwt.SigningKeyCallback) {
    this.jwksClient.getSigningKey(header.kid, (err, key) => {
      if (err) {
        callback(err, undefined);
      } else {
        if (key) {
          const signingKey = key.getPublicKey();
          callback(null, signingKey);
        } else {
          callback(new Error('Signing key is undefined'), undefined);
        }
      }
    });
  }

  async verifyToken(token: string): Promise<any> {
    const decoded: any = await new Promise((resolve, reject) => {
      jwt.verify(
        token,
        this.getKey.bind(this),
        {
          algorithms: ['ES384'],
          audience: 'http://localhost:3000/auth/verify',
          issuer: 'https://u9sgmd.logto.app/oidc',
        },
        (err, decoded) => {
          if (err) {
            reject(new UnauthorizedException('Invalid token'));
          } else {
            resolve(decoded);
          }
        }
      );
    });

    console.log('Decoded token:', decoded);

    const user = await this.getUserInfo(decoded.sub, token);
    return { decoded, user };
  }

  async getUserInfo(userId: string, token:string) {

    const response = await fetch(`https://u9sgmd.logto.app/api/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userInfo = await response.json();
    console.log('User info:', userInfo);
    return userInfo;
  }
}
