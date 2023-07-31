import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UserService], //this line is used to import UserService
  exports: [UserService] // and this line of code will make sure UserService is also available for rest of the code
})
export class UserModule {}
