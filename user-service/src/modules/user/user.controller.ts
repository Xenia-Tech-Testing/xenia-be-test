import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { QueryParamUserDto } from './dto/query-param.dto';
import { UserService } from './user.service';

@Controller({
  version: ['1'],
  path: '',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getList(@Query() queryParamDto: QueryParamUserDto) {
    return this.userService.getList(queryParamDto);
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() body: LoginDto) {
    const { accessToken } = body;
    return this.userService.login(accessToken);
  }
}
