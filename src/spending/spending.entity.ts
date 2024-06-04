import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {FinancialAccount} from "../financial-account/financial-account.entity";
import {Category} from "../category/category.entity";
import {User} from "../users/user.entity";
import {Currency, TransactionType} from "./spending.models";
import {Account} from "../account/account.entity";

@Entity()
export class Spending {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number;

    @Column({type: "enum", enum: Currency})
    currency: string;

    @Column({type: "timestamp"})
    date: string;

    @Column({type: "enum", enum: TransactionType, default: TransactionType.SPEND})
    transactionType: string;

    @ManyToOne(() => FinancialAccount, (account) => account.spending)
    financialAccount: FinancialAccount;

    @ManyToOne(() => Category,  (category) => category.spending)
    category: Category;

    @ManyToOne(() => User, (user) => user.spending)
    user: User

    @ManyToOne(() => Account, (account) => account.spending)
    account: Account
}
