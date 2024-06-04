import { Spending } from "../spending/spending.entity";
export declare class User {
    id: number;
    username: string;
    password: string;
    spending: Spending[];
}
