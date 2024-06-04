import { FinancialAccount } from "../financial-account/financial-account.entity";
import { Category } from "../category/category.entity";
import { User } from "../users/user.entity";
import { Account } from "../account/account.entity";
export declare class Spending {
    id: number;
    value: number;
    currency: string;
    date: string;
    transactionType: string;
    financialAccount: FinancialAccount;
    category: Category;
    user: User;
    account: Account;
}
