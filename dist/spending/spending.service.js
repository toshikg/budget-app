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
exports.SpendingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const spending_entity_1 = require("./spending.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const spending_models_1 = require("./spending.models");
let SpendingService = class SpendingService {
    constructor(spendingRepo, userRepo) {
        this.spendingRepo = spendingRepo;
        this.userRepo = userRepo;
    }
    async addOne(data) {
        const spending = this.spendingRepo.create({ ...data });
        spending.date = new Date().toUTCString();
        spending.value =
            spending.transactionType === spending_models_1.TransactionType.SPEND
                ? -Math.abs(spending.value)
                : spending.value;
        spending.category = data.categoryId;
        spending.financialAccount = data.financialAccountId;
        spending.account = data.accountId;
        spending.user = await this.userRepo.findOneBy({ id: data.userId });
        return this.spendingRepo.save(spending);
    }
    findAll() {
        return this.spendingRepo.find();
    }
    getTotalAmount() {
        return this.spendingRepo.sum('value');
    }
};
exports.SpendingService = SpendingService;
exports.SpendingService = SpendingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(spending_entity_1.Spending)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SpendingService);
//# sourceMappingURL=spending.service.js.map