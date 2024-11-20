import { Article } from './interfaces/Article';
import { ArticleValidator } from './services/ArticleValidator';
import { ArticleOperations } from './services/ArticleOperations';


const article: Article = {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'draft',
    title: 'Заголовок статті',
    content: 'Текст статті',
    authorId: 'author1',
    tags: ['новини', 'технології'],
};

const validator = new ArticleValidator();
const validation = validator.validate(article);

if (validation.isValid) {
    console.log('Стаття валідна');
} else {
    console.error('Помилки валідації:', validation.errors);
}

const articleOps = new ArticleOperations();
articleOps.create(article).then((created: Article) => {
    console.log('Створено статтю:', created);
});

