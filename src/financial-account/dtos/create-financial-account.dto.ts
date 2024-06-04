import {IsEnum, IsNumber, IsString} from "class-validator";
import {AccountType} from "../financial-account.models";

export class CreateFinancialAccountDto {
    @IsString()
    name: string;

    @IsString()
    @IsEnum(AccountType)
    type: AccountType;

    @IsNumber()
    initialValue: number;
}
