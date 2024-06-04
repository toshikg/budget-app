import { Module } from '@nestjs/common';
import { FinancialAccountController } from './financial-account-controller';
import { FinancialAccountService } from './financial-account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialAccount } from './financial-account.entity';

@Module({
  controllers: [FinancialAccountController],
  imports: [TypeOrmModule.forFeature([FinancialAccount])],
  providers: [FinancialAccountService],
  exports: [FinancialAccountService],
})
export class FinancialAccountModule {}
