import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Category} from "./category.entity";
import {Repository} from "typeorm";

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(Category) private categoryRepo: Repository<Category>) {
    }

    addOne(name: string) {
        const category = this.categoryRepo.create();
        category.name = name;

        return this.categoryRepo.save(category);
    }

    findAll() {
        return this.categoryRepo.find();
    }
}
