import { AccountType } from "./financial-account.models";
import { Spending } from "../spending/spending.entity";
export declare class FinancialAccount {
    id: number;
    name: string;
    type: AccountType;
    initialValue: number;
    spending: Spending[];
}
