import { Module } from '@nestjs/common';
import { SpendingController } from './spending.controller';
import { SpendingService } from './spending.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spending } from './spending.entity';
import { User } from '../users/user.entity';

@Module({
  controllers: [SpendingController],
  imports: [
    TypeOrmModule.forFeature([Spending]),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [SpendingService],
  exports: [SpendingService],
})
export class SpendingModule {}
