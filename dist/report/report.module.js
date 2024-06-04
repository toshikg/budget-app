"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportModule = void 0;
const common_1 = require("@nestjs/common");
const report_controller_1 = require("./report.controller");
const report_service_1 = require("./report.service");
const spending_module_1 = require("../spending/spending.module");
const financial_account_module_1 = require("../financial-account/financial-account.module");
const typeorm_1 = require("@nestjs/typeorm");
const spending_entity_1 = require("../spending/spending.entity");
let ReportModule = class ReportModule {
};
exports.ReportModule = ReportModule;
exports.ReportModule = ReportModule = __decorate([
    (0, common_1.Module)({
        controllers: [report_controller_1.ReportController],
        providers: [report_service_1.ReportService],
        imports: [
            spending_module_1.SpendingModule,
            financial_account_module_1.FinancialAccountModule,
            typeorm_1.TypeOrmModule.forFeature([spending_entity_1.Spending]),
        ],
    })
], ReportModule);
//# sourceMappingURL=report.module.js.map