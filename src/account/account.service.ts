import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Account} from "./account.entity";
import {User} from "../users/user.entity";

@Injectable()
export class AccountService {
    constructor(@InjectRepository(Account) private accountRepo: Repository<Account>,
                @InjectRepository(User) private userRepo: Repository<User>) {}

    async addOne(name: string, userId: number) {
        const account = this.accountRepo.create();
        account.name = name;
        const user = await this.userRepo.findOneBy({id: userId});
        account.user = [user];

        return this.accountRepo.save(account);
    }

    findAccountsByUserId(userId: number) {
        return this.accountRepo.findBy({id: userId})
    }
}
