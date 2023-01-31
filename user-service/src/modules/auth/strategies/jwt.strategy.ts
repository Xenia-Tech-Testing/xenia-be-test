import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from '../payloads/jwt-payload';
import { jwtConfig } from 'src/configs/constants.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConfig.SECRET,
    });
  }

  async validate(payload: JwtPayload): Promise<JwtPayload> {
    return { ...payload };
  }
}
