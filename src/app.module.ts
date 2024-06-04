import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { SpendingModule } from './spending/spending.module';
import { CategoryModule } from './category/category.module';
import { FinancialAccountModule } from './financial-account/financial-account.module';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: '123',
    database: 'budget_app',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }), SpendingModule, CategoryModule, FinancialAccountModule, AccountModule, AuthModule, ReportModule],
})
export class AppModule {}
