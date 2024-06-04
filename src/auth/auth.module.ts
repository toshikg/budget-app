import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import {AccountModule} from "../account/account.module";
import {UsersModule} from "../users/users.module";

@Module({
  controllers: [AuthController],
  imports: [AccountModule, UsersModule],
  providers: []
})
export class AuthModule {}
