import { CreateFinancialAccountDto } from "./dtos/create-financial-account.dto";
import { FinancialAccountService } from "./financial-account.service";
export declare class FinancialAccountController {
    private accountService;
    constructor(accountService: FinancialAccountService);
    createAccount(data: CreateFinancialAccountDto): Promise<import("./financial-account.entity").FinancialAccount>;
    getAccounts(): Promise<import("./financial-account.entity").FinancialAccount[]>;
}
