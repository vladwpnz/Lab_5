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
// Приклад реалізації ContentOperations для статей
class ArticleOperations {
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            // Реалізація створення статті
            return item;
        });
    }
    read(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Реалізація читання статті
            return null;
        });
    }
    update(id, updates) {
        return __awaiter(this, void 0, void 0, function* () {
            // Реалізація оновлення статті
            return Object.assign({}, updates);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Реалізація видалення статті
        });
    }
    list(params) {
        return __awaiter(this, void 0, void 0, function* () {
            // Реалізація отримання списку статей
            return [];
        });
    }
}
const permissions = {
    admin: { create: true, read: true, update: true, delete: true },
    editor: { create: true, read: true, update: true, delete: false },
    viewer: { create: false, read: true, update: false, delete: false },
};
class ContentAccessControl {
    canCreate(role, item) {
        return permissions[role].create;
    }
    canRead(role, item) {
        return permissions[role].read;
    }
    canUpdate(role, item) {
        return permissions[role].update;
    }
    canDelete(role, item) {
        return permissions[role].delete;
    }
}
// Валідатор для статей
class ArticleValidator {
    validate(data) {
        const errors = [];
        if (!data.title) {
            errors.push('Title is required.');
        }
        if (!data.content) {
            errors.push('Content is required.');
        }
        if (!data.authorId) {
            errors.push('Author ID is required.');
        }
        return {
            isValid: errors.length === 0,
            errors: errors.length ? errors : undefined,
        };
    }
}
// Валідатор для продуктів
class ProductValidator {
    validate(data) {
        const errors = [];
        if (!data.name) {
            errors.push('Name is required.');
        }
        if (data.price == null || data.price < 0) {
            errors.push('Price must be a positive number.');
        }
        if (!data.sku) {
            errors.push('SKU is required.');
        }
        return {
            isValid: errors.length === 0,
            errors: errors.length ? errors : undefined,
        };
    }
}
// Композитний валідатор
class CompositeValidator {
    constructor(validators) {
        this.validators = validators;
    }
    validate(data) {
        const errors = [];
        this.validators.forEach((validator) => {
            const result = validator.validate(data);
            if (!result.isValid && result.errors) {
                errors.push(...result.errors);
            }
        });
        return {
            isValid: errors.length === 0,
            errors: errors.length ? errors : undefined,
        };
    }
}
class VersionedContent {
    constructor(initialContent) {
        this.content = Object.assign(Object.assign({}, initialContent), { version: 1, history: [initialContent] });
    }
    updateContent(updates) {
        const updatedContent = Object.assign(Object.assign(Object.assign({}, this.content), updates), { updatedAt: new Date() });
        this.content.history.push(updatedContent);
        this.content = Object.assign(Object.assign({}, updatedContent), { version: this.content.version + 1 });
    }
    getContent() {
        return this.content;
    }
    getVersion(version) {
        return this.content.history.find((item, index) => index + 1 === version);
    }
}
// Приклад використання
const article = {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'draft',
    title: 'Заголовок статті',
    content: 'Текст статті',
    authorId: 'author1',
    tags: ['новини', 'технології'],
};
const articleValidator = new ArticleValidator();
const validation = articleValidator.validate(article);
if (validation.isValid) {
    console.log('Стаття валідна');
}
else {
    console.error('Помилки валідації:', validation.errors);
}
const articleAccessControl = new ContentAccessControl();
if (articleAccessControl.canCreate('editor', article)) {
    console.log('Редактор може створювати статті');
}
const versionedArticle = new VersionedContent(article);
versionedArticle.updateContent({ status: 'published' });
console.log('Поточна версія статті:', versionedArticle.getContent());
console.log('Версія 1 статті:', versionedArticle.getVersion(1));
