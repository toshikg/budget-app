import { Injectable } from '@nestjs/common';
import { SpendingService } from '../spending/spending.service';
import { TotalsReportDto } from './dtos/totals-report.dto';
import { FinancialAccountService } from '../financial-account/financial-account.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Spending } from '../spending/spending.entity';
import { Repository } from 'typeorm';
import { TransactionType } from '../spending/spending.models';

@Injectable()
export class ReportService {
  constructor(
    private spendingService: SpendingService,
    private financialAccountService: FinancialAccountService,
    @InjectRepository(Spending) private spendingRepo: Repository<Spending>,
  ) {}

  async generateTotalsReport(): Promise<TotalsReportDto> {
    const total = await this.spendingService.getTotalAmount();
    const initialsTotal = await this.financialAccountService.getInitialsSum();

    return {
      total: total + initialsTotal,
    };
  }

  getSpendingByCategories() {
    return this.spendingRepo
      .createQueryBuilder('spending')
      .select('spending.categoryId')
      .where('spending.transactionType = :type', {
        type: TransactionType.SPEND,
      })
      .addSelect('SUM(spending.value)', 'total')
      .groupBy('spending.categoryId')
      .getRawMany();
  }
}
