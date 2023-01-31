import { Module } from '@nestjs/common';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/configs/constants.config';
import { GoogleStrategy } from './strategies/google.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConfig.SECRET,
      signOptions: {
        expiresIn: jwtConfig.EXPIRED_IN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [JwtStrategy, GoogleStrategy, AuthService],
  exports: [],
})
export class AuthModule {}
