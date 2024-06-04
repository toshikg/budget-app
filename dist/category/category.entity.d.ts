import { Spending } from "../spending/spending.entity";
export declare class Category {
    id: number;
    name: string;
    alias: string;
    spending: Spending[];
}
