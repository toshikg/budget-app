import { UsersService } from "../users/users.service";
import { AccountService } from "../account/account.service";
import { CreateUserDto } from "../users/dtos/create-user.dto";
import { User } from "../users/user.entity";
export declare class AuthController {
    private userService;
    private accountService;
    constructor(userService: UsersService, accountService: AccountService);
    signUp(data: CreateUserDto): Promise<User>;
}
