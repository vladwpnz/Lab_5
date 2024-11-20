import { BaseContent } from '../interfaces/BaseContent';

export type ContentOperations<T extends BaseContent> = {
    create(item: T): Promise<T>;
    read(id: string): Promise<T | null>;
    update(id: string, updates: Partial<T>): Promise<T>;
    delete(id: string): Promise<void>;
    list(params?: any): Promise<T[]>;
};
