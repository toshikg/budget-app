import { User } from "../users/user.entity";
import { Spending } from "../spending/spending.entity";
export declare class Account {
    id: number;
    name: string;
    spending: Spending[];
    user: User[];
}
