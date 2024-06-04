import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Spending} from "../spending/spending.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 20})
    name: string;

    @Column({type: "varchar", length: 20, default: ''})
    alias: string;

    @OneToMany(() => Spending, (spending) => spending.category)
    spending: Spending[];
}
