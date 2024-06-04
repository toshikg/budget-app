import { Test, TestingModule } from '@nestjs/testing';
import { FinancialAccountService } from './financial-account.service';

describe('FinancialAccountService', () => {
  let service: FinancialAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinancialAccountService],
    }).compile();

    service = module.get<FinancialAccountService>(FinancialAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
