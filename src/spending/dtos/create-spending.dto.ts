import {JoinTable, ManyToMany, ManyToOne} from "typeorm";
import {Currency, TransactionType} from "../spending.models";
import {Category} from "../../category/category.entity";;
import {IsDateString, IsEnum, IsNumber} from "class-validator";

export class CreateSpendingDto {
    @IsNumber()
    value: number;

    @IsEnum(Currency)
    currency: Currency;

    @IsEnum(TransactionType)
    transactionType: TransactionType;

    @IsNumber()
    financialAccountId: number;

    @IsNumber()
    accountId: number;

    @IsNumber()
    categoryId: number;

    @IsNumber()
    userId: number;
}
