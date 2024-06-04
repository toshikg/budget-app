import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { SpendingModule } from '../spending/spending.module';
import { FinancialAccountModule } from '../financial-account/financial-account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spending } from '../spending/spending.entity';

@Module({
  controllers: [ReportController],
  providers: [ReportService],
  imports: [
    SpendingModule,
    FinancialAccountModule,
    TypeOrmModule.forFeature([Spending]),
  ],
})
export class ReportModule {}
