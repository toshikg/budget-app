import { CategoryService } from "./category.service";
import { CreateCategoryDTO } from "./dtos/create-category.dto";
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    createCategory(category: CreateCategoryDTO): Promise<import("./category.entity").Category>;
    getAllCategories(): Promise<import("./category.entity").Category[]>;
}
