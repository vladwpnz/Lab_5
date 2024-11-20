"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleValidator = void 0;
class ArticleValidator {
    validate(data) {
        const errors = [];
        if (!data.title)
            errors.push('Title is required.');
        if (!data.content)
            errors.push('Content is required.');
        if (!data.authorId)
            errors.push('Author ID is required.');
        return {
            isValid: errors.length === 0,
            errors: errors.length ? errors : undefined,
        };
    }
}
exports.ArticleValidator = ArticleValidator;
