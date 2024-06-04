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
exports.SpendingController = void 0;
const common_1 = require("@nestjs/common");
const spending_service_1 = require("./spending.service");
const create_spending_dto_1 = require("./dtos/create-spending.dto");
const serialize_interceptor_1 = require("../interceptors/serialize.interceptor");
const spending_dto_1 = require("./dtos/spending.dto");
let SpendingController = class SpendingController {
    constructor(spendingService) {
        this.spendingService = spendingService;
    }
    addSpending(data) {
        return this.spendingService.addOne(data);
    }
    getSpending() {
        return this.spendingService.findAll();
    }
};
exports.SpendingController = SpendingController;
__decorate([
    (0, common_1.Post)(),
    (0, serialize_interceptor_1.Serialize)(spending_dto_1.SpendingDto),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_spending_dto_1.CreateSpendingDto]),
    __metadata("design:returntype", void 0)
], SpendingController.prototype, "addSpending", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SpendingController.prototype, "getSpending", null);
exports.SpendingController = SpendingController = __decorate([
    (0, common_1.Controller)('spending'),
    __metadata("design:paramtypes", [spending_service_1.SpendingService])
], SpendingController);
//# sourceMappingURL=spending.controller.js.map