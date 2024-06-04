import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Spending } from './spending.entity';
import { Repository } from 'typeorm';
import { CreateSpendingDto } from './dtos/create-spending.dto';
import { User } from '../users/user.entity';
import { TransactionType } from './spending.models';
import { TotalsReportDto } from '../report/dtos/totals-report.dto';

@Injectable()
export class SpendingService {
  constructor(
    @InjectRepository(Spending) private spendingRepo: Repository<Spending>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async addOne(data: CreateSpendingDto) {
    const spending = this.spendingRepo.create({ ...data });
    spending.date = new Date().toUTCString();
    spending.value =
      spending.transactionType === TransactionType.SPEND
        ? -Math.abs(spending.value)
        : spending.value;
    spending.category = <any>data.categoryId;
    spending.financialAccount = <any>data.financialAccountId;
    spending.account = <any>data.accountId;
    spending.user = await this.userRepo.findOneBy({ id: data.userId });

    return this.spendingRepo.save(spending);
  }

  findAll() {
    return this.spendingRepo.find();
  }

  getTotalAmount(): Promise<number> {
    return this.spendingRepo.sum('value');
  }
}
