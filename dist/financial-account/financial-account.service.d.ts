import { FinancialAccount } from './financial-account.entity';
import { Repository } from 'typeorm';
import { AccountType } from './financial-account.models';
export declare class FinancialAccountService {
    private accountRepo;
    constructor(accountRepo: Repository<FinancialAccount>);
    addOne(name: string, type: AccountType): Promise<FinancialAccount>;
    getAll(): Promise<FinancialAccount[]>;
    getInitialsSum(): Promise<number>;
}
