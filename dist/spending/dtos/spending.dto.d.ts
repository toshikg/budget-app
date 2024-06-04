import { Currency, TransactionType } from "../spending.models";
export declare class SpendingDto {
    value: number;
    currency: Currency;
    transactionType: TransactionType;
    accountId: number;
    categoryId: number;
}
