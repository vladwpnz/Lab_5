import { Article } from '../interfaces/Article';
import { ContentOperations } from './ContentOperations';

export class ArticleOperations implements ContentOperations<Article> {
    async create(item: Article): Promise<Article> {
        return item;
    }

    async read(id: string): Promise<Article | null> {
        return null;
    }

    async update(id: string, updates: Partial<Article>): Promise<Article> {
        return { ...updates } as Article;
    }

    async delete(id: string): Promise<void> {}

    async list(params?: any): Promise<Article[]> {
        return [];
    }
}
