"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleOperations = void 0;
class ArticleOperations {
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            return item;
        });
    }
    read(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    update(id, updates) {
        return __awaiter(this, void 0, void 0, function* () {
            return Object.assign({}, updates);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    list(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
}
exports.ArticleOperations = ArticleOperations;
