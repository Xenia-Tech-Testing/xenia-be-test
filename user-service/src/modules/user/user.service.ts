// import { CreateUserDto } from './dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';
import { ISearchFilterPaginationParams, JwtPayload } from './user.interface';
import { FindManyOptions, Like } from 'typeorm';
import { google, Auth } from 'googleapis';
import { GOOGLE_OAUTH_CONFIG } from 'src/configs/constants.config';

@Injectable()
export class UserService {
  oauthClient: Auth.OAuth2Client;

  constructor(private userRepository: UserRepository, private readonly jwtService: JwtService) {
    const clientID = GOOGLE_OAUTH_CONFIG.CLIENT_ID;
    const clientSecret = GOOGLE_OAUTH_CONFIG.SECRET;
    this.oauthClient = new google.auth.OAuth2(clientID, clientSecret);
  }

  async login(accessToken: string) {
    try {
      const tokenInfo = await this.oauthClient.getTokenInfo(accessToken);

      const email = tokenInfo.email;
      const user = await this.userRepository.findOne({
        where: {
          email: email,
        },
      });

      let payload: JwtPayload;

      if (!user) {
        const userCreate = {
          email: tokenInfo.email,
        };
        const newUser = await this.userRepository.save(userCreate);
        payload = {
          sub: newUser.id,
          email: newUser.email,
        };
      } else {
        payload = {
          sub: user.id,
          email: user.email,
        };
      }

      return {
        accessToken: this.jwtService.sign(payload),
      };
    } catch (err) {
      throw new BadRequestException('Token Invalid');
    }
  }

  getList(paginateParams: ISearchFilterPaginationParams) {
    const options: FindManyOptions = {};
    if (paginateParams.search) {
      options.where = {
        username: Like(`%${paginateParams.search}%`),
      };
    }

    if (paginateParams.type) {
      options.where = {
        ...options.where,
        type: paginateParams.type,
      };
    }
    return this.userRepository.findPaginate(paginateParams, options);
  }
}
