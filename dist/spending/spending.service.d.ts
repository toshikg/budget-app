import { Spending } from './spending.entity';
import { Repository } from 'typeorm';
import { CreateSpendingDto } from './dtos/create-spending.dto';
import { User } from '../users/user.entity';
export declare class SpendingService {
    private spendingRepo;
    private userRepo;
    constructor(spendingRepo: Repository<Spending>, userRepo: Repository<User>);
    addOne(data: CreateSpendingDto): Promise<Spending>;
    findAll(): Promise<Spending[]>;
    getTotalAmount(): Promise<number>;
}
