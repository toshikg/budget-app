import {Body, Controller, Get, Post} from '@nestjs/common';
import {CategoryService} from "./category.service";
import {CreateCategoryDTO} from "./dtos/create-category.dto";

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {
    }
    @Post()
    createCategory(@Body() category: CreateCategoryDTO) {
        return this.categoryService.addOne(category.name);
    }

    @Get()
    getAllCategories() {
        return this.categoryService.findAll();
    }
}
