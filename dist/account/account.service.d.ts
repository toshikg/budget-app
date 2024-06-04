import { Repository } from "typeorm";
import { Account } from "./account.entity";
import { User } from "../users/user.entity";
export declare class AccountService {
    private accountRepo;
    private userRepo;
    constructor(accountRepo: Repository<Account>, userRepo: Repository<User>);
    addOne(name: string, userId: number): Promise<Account>;
    findAccountsByUserId(userId: number): Promise<Account[]>;
}
