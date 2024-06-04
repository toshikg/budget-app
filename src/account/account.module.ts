import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Account} from "./account.entity";
import { AccountService } from './account.service';
import {User} from "../users/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Account]), TypeOrmModule.forFeature([User])],
    providers: [AccountService],
    exports: [AccountService]
})
export class AccountModule {}
