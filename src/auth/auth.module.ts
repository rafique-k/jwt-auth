import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';



@Module({
  imports: [PassportModule,
    UserModule,
JwtModule.register({
    secret: "Key",
    signOptions: {
        expiresIn: "60s"
    }
})],
  controllers: [],
  providers: [ LocalStrategy, JwtStrategy ,AuthService],
  exports: [AuthService]
})
export class AuthModule {}
