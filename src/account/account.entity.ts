import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../users/user.entity";
import {Spending} from "../spending/spending.entity";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 20})
    name: string;

    @OneToMany(() => Spending, (spending) => spending.account)
    spending: Spending[];

    @ManyToMany(() => User)
    @JoinTable()
    user: User[]
}
