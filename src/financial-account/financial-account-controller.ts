import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateFinancialAccountDto} from "./dtos/create-financial-account.dto";
import {FinancialAccountService} from "./financial-account.service";

@Controller('financial-account')
export class FinancialAccountController {
    constructor(private accountService: FinancialAccountService) {
    }
    @Post()
    createAccount(@Body() data: CreateFinancialAccountDto) {
        return this.accountService.addOne(data.name, data.type)
    }

    @Get()
    getAccounts() {
        return this.accountService.getAll();
    }
}
