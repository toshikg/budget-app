import { SpendingService } from "./spending.service";
import { CreateSpendingDto } from "./dtos/create-spending.dto";
export declare class SpendingController {
    private spendingService;
    constructor(spendingService: SpendingService);
    addSpending(data: CreateSpendingDto): Promise<import("./spending.entity").Spending>;
    getSpending(): Promise<import("./spending.entity").Spending[]>;
}
