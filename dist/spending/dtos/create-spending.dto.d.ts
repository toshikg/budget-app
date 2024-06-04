import { Currency, TransactionType } from "../spending.models";
export declare class CreateSpendingDto {
    value: number;
    currency: Currency;
    transactionType: TransactionType;
    financialAccountId: number;
    accountId: number;
    categoryId: number;
    userId: number;
}
