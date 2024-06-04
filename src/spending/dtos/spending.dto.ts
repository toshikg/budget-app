import {Currency, TransactionType} from "../spending.models";
import {Expose, Transform} from "class-transformer";

export class SpendingDto {
    @Expose()
    value: number;

    @Expose()
    currency: Currency;

    @Expose()
    transactionType: TransactionType;

    @Expose()
    accountId: number;

    @Expose()
    categoryId: number;
}
