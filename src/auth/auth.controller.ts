import {Body, Controller, Post} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {AccountService} from "../account/account.service";
import {CreateUserDto} from "../users/dtos/create-user.dto";
import {User} from "../users/user.entity";

@Controller('auth')
export class AuthController {
    constructor(private userService: UsersService, private accountService: AccountService){}

    @Post('/signup')
    async signUp(@Body() data: CreateUserDto) {
        const user = await this.userService.addOne(data) as User;

        if(user instanceof Error) {
            return user;
        }

        await this.accountService.addOne(user.username, user.id);
        return user;
    }
}
