import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "./dtos/create-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
                private usersRepository: Repository<User>) {
    }

    async addOne(data: CreateUserDto) {
        const userExists = await this.usersRepository.existsBy({username: data.username});

        if(userExists) {
            throw new BadRequestException(`User ${data.username} already exists`)
        }

        const user = this.usersRepository.create({
            username: data.username,
            password: data.password
        })

        return this.usersRepository.save(user);
    }
}
