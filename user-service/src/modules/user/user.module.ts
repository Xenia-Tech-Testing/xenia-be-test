import { userProviders } from './user.providers';
import { UserRepository } from './user.repository';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/configs/constants.config';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConfig.SECRET,
      signOptions: {
        expiresIn: jwtConfig.EXPIRED_IN,
      },
    }),
  ],
  controllers: [UserController],
  providers: [...userProviders, UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}
