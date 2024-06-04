import { AccountType } from "../financial-account.models";
export declare class CreateFinancialAccountDto {
    name: string;
    type: AccountType;
    initialValue: number;
}
