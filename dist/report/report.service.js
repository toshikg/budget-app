"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const spending_service_1 = require("../spending/spending.service");
const financial_account_service_1 = require("../financial-account/financial-account.service");
const typeorm_1 = require("@nestjs/typeorm");
const spending_entity_1 = require("../spending/spending.entity");
const typeorm_2 = require("typeorm");
const spending_models_1 = require("../spending/spending.models");
let ReportService = class ReportService {
    constructor(spendingService, financialAccountService, spendingRepo) {
        this.spendingService = spendingService;
        this.financialAccountService = financialAccountService;
        this.spendingRepo = spendingRepo;
    }
    async generateTotalsReport() {
        const total = await this.spendingService.getTotalAmount();
        const initialsTotal = await this.financialAccountService.getInitialsSum();
        return {
            total: total + initialsTotal,
        };
    }
    getSpendingByCategories() {
        return this.spendingRepo
            .createQueryBuilder('spending')
            .select('spending.categoryId')
            .where('spending.transactionType = :type', {
            type: spending_models_1.TransactionType.SPEND,
        })
            .addSelect('SUM(spending.value)', 'total')
            .groupBy('spending.categoryId')
            .getRawMany();
    }
};
exports.ReportService = ReportService;
exports.ReportService = ReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(spending_entity_1.Spending)),
    __metadata("design:paramtypes", [spending_service_1.SpendingService,
        financial_account_service_1.FinancialAccountService,
        typeorm_2.Repository])
], ReportService);
//# sourceMappingURL=report.service.js.map