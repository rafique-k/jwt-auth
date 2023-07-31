import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { CONSTANTS } from 'constant';



@Controller('app')
export class AppController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('/login')
  @UseGuards(AuthGuard("local"))
  login(@Request() req): string
  {
    const token = this.authService.generateToken(req.user)
    return token;
  }

  // @Get('/android-developer')
  // @UseGuards(AuthGuard("jwt"))
  // androidDeveloper(@Request() req): string
  // {
  //   return "This is private for ANDROID Developer " + JSON.stringify(req.user) //this line will show if we are getting the user data in the Request
  // }

  // @Get('/web-developer')
  // @UseGuards(AuthGuard("jwt"))
  // webDeveloper(@Request() req): string
  // {
  //   return "This is private for WEB Developer " + JSON.stringify(req.user); //this line will show if we are getting the user data in the Request
  // }
}
