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
exports.FinancialAccountController = void 0;
const common_1 = require("@nestjs/common");
const create_financial_account_dto_1 = require("./dtos/create-financial-account.dto");
const financial_account_service_1 = require("./financial-account.service");
let FinancialAccountController = class FinancialAccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    createAccount(data) {
        return this.accountService.addOne(data.name, data.type);
    }
    getAccounts() {
        return this.accountService.getAll();
    }
};
exports.FinancialAccountController = FinancialAccountController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_financial_account_dto_1.CreateFinancialAccountDto]),
    __metadata("design:returntype", void 0)
], FinancialAccountController.prototype, "createAccount", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FinancialAccountController.prototype, "getAccounts", null);
exports.FinancialAccountController = FinancialAccountController = __decorate([
    (0, common_1.Controller)('financial-account'),
    __metadata("design:paramtypes", [financial_account_service_1.FinancialAccountService])
], FinancialAccountController);
//# sourceMappingURL=financial-account-controller.js.map