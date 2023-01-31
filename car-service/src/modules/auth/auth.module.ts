import { Module } from '@nestjs/common';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/configs/constants.config';

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
  providers: [JwtStrategy],
  exports: [],
})
export class AuthModule {}
