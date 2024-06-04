import {Body, Controller, Get, Post} from '@nestjs/common';
import {SpendingService} from "./spending.service";
import {CreateSpendingDto} from "./dtos/create-spending.dto";
import {Serialize} from "../interceptors/serialize.interceptor";
import {SpendingDto} from "./dtos/spending.dto";

@Controller('spending')
export class SpendingController {
    constructor(private spendingService: SpendingService) {}

    @Post()
    @Serialize(SpendingDto)
    addSpending(@Body() data: CreateSpendingDto) {
        return this.spendingService.addOne(data);
    }

    @Get()
    getSpending() {
        return this.spendingService.findAll();
    }

}
