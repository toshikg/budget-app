import { User } from "./user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    addOne(data: CreateUserDto): Promise<User>;
}
