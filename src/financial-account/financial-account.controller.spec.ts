import { Test, TestingModule } from '@nestjs/testing';
import { FinancialAccountController } from './financial-account-controller';

describe('FinancialAccountController', () => {
  let controller: FinancialAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancialAccountController],
    }).compile();

    controller = module.get<FinancialAccountController>(FinancialAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
