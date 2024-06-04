import { Category } from "./category.entity";
import { Repository } from "typeorm";
export declare class CategoryService {
    private categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    addOne(name: string): Promise<Category>;
    findAll(): Promise<Category[]>;
}
