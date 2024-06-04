import { SpendingService } from '../spending/spending.service';
import { TotalsReportDto } from './dtos/totals-report.dto';
import { FinancialAccountService } from '../financial-account/financial-account.service';
import { Spending } from '../spending/spending.entity';
import { Repository } from 'typeorm';
export declare class ReportService {
    private spendingService;
    private financialAccountService;
    private spendingRepo;
    constructor(spendingService: SpendingService, financialAccountService: FinancialAccountService, spendingRepo: Repository<Spending>);
    generateTotalsReport(): Promise<TotalsReportDto>;
    getSpendingByCategories(): Promise<any[]>;
}
