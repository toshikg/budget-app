import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateUserDto} from "./dtos/create-user.dto";
import {UsersService} from "./users.service";
import {Serialize} from "../interceptors/serialize.interceptor";
import {UserDto} from "./dtos/user.dto";

@Controller('users')
@Serialize(UserDto)
export class UsersController {
    constructor(private usersService: UsersService) {
    }
    @Post()
    addUser(@Body() data: CreateUserDto) {
        return this.usersService.addOne(data);
    }
}
