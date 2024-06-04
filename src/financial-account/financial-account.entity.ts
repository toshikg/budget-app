import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {AccountType} from "./financial-account.models";
import {Spending} from "../spending/spending.entity";

@Entity()
export class FinancialAccount {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 20})
    name: string;

    @Column({type: "enum", enum: AccountType, default: AccountType.CACHE})
    type: AccountType;

    @Column({type: "int", default: 0})
    initialValue: number;

    @OneToMany(() => Spending, (spending) => spending.account)
    spending: Spending[]
}
