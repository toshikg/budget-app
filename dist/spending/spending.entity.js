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
exports.Spending = void 0;
const typeorm_1 = require("typeorm");
const financial_account_entity_1 = require("../financial-account/financial-account.entity");
const category_entity_1 = require("../category/category.entity");
const user_entity_1 = require("../users/user.entity");
const spending_models_1 = require("./spending.models");
const account_entity_1 = require("../account/account.entity");
let Spending = class Spending {
};
exports.Spending = Spending;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Spending.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Spending.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: spending_models_1.Currency }),
    __metadata("design:type", String)
], Spending.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp" }),
    __metadata("design:type", String)
], Spending.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: spending_models_1.TransactionType, default: spending_models_1.TransactionType.SPEND }),
    __metadata("design:type", String)
], Spending.prototype, "transactionType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => financial_account_entity_1.FinancialAccount, (account) => account.spending),
    __metadata("design:type", financial_account_entity_1.FinancialAccount)
], Spending.prototype, "financialAccount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (category) => category.spending),
    __metadata("design:type", category_entity_1.Category)
], Spending.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.spending),
    __metadata("design:type", user_entity_1.User)
], Spending.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_entity_1.Account, (account) => account.spending),
    __metadata("design:type", account_entity_1.Account)
], Spending.prototype, "account", void 0);
exports.Spending = Spending = __decorate([
    (0, typeorm_1.Entity)()
], Spending);
//# sourceMappingURL=spending.entity.js.map