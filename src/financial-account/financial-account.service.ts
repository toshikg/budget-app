import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FinancialAccount } from './financial-account.entity';
import { Repository } from 'typeorm';
import { AccountType } from './financial-account.models';

@Injectable()
export class FinancialAccountService {
  constructor(
    @InjectRepository(FinancialAccount)
    private accountRepo: Repository<FinancialAccount>,
  ) {}

  addOne(name: string, type: AccountType) {
    const account = this.accountRepo.create();
    account.name = name;
    account.type = type;

    return this.accountRepo.save(account);
  }

  getAll() {
    return this.accountRepo.find();
  }

  getInitialsSum() {
    return this.accountRepo.sum('initialValue');
  }
}
