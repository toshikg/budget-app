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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialAccount = void 0;
const typeorm_1 = require("typeorm");
const financial_account_models_1 = require("./financial-account.models");
const spending_entity_1 = require("../spending/spending.entity");
let FinancialAccount = class FinancialAccount {
};
exports.FinancialAccount = FinancialAccount;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FinancialAccount.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 20 }),
    __metadata("design:type", String)
], FinancialAccount.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: financial_account_models_1.AccountType, default: financial_account_models_1.AccountType.CACHE }),
    __metadata("design:type", String)
], FinancialAccount.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: 0 }),
    __metadata("design:type", Number)
], FinancialAccount.prototype, "initialValue", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => spending_entity_1.Spending, (spending) => spending.account),
    __metadata("design:type", Array)
], FinancialAccount.prototype, "spending", void 0);
exports.FinancialAccount = FinancialAccount = __decorate([
    (0, typeorm_1.Entity)()
], FinancialAccount);
//# sourceMappingURL=financial-account.entity.js.map