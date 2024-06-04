"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionType = exports.Currency = void 0;
var Currency;
(function (Currency) {
    Currency["USD"] = "usd";
    Currency["EUR"] = "eur";
    Currency["UAH"] = "uah";
})(Currency || (exports.Currency = Currency = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["SPEND"] = "spending";
    TransactionType["TRANSLATE"] = "transferring";
    TransactionType["REFILL"] = "refill";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
//# sourceMappingURL=spending.models.js.map