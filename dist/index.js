"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArticleValidator_1 = require("./services/ArticleValidator");
const ArticleOperations_1 = require("./services/ArticleOperations");
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
const validator = new ArticleValidator_1.ArticleValidator();
const validation = validator.validate(article);
if (validation.isValid) {
    console.log('Стаття валідна');
}
else {
    console.error('Помилки валідації:', validation.errors);
}
const articleOps = new ArticleOperations_1.ArticleOperations();
articleOps.create(article).then((created) => {
    console.log('Створено статтю:', created);
});
