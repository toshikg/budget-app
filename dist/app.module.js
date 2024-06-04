"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const spending_module_1 = require("./spending/spending.module");
const category_module_1 = require("./category/category.module");
const financial_account_module_1 = require("./financial-account/financial-account.module");
const account_module_1 = require("./account/account.module");
const auth_module_1 = require("./auth/auth.module");
const report_module_1 = require("./report/report.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'admin',
                password: '123',
                database: 'budget_app',
                entities: ["dist/**/*.entity{.ts,.js}"],
                synchronize: true,
            }), spending_module_1.SpendingModule, category_module_1.CategoryModule, financial_account_module_1.FinancialAccountModule, account_module_1.AccountModule, auth_module_1.AuthModule, report_module_1.ReportModule],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map