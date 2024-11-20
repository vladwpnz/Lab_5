import { BaseContent } from './BaseContent';

export interface Product extends BaseContent {
    name: string;
    description: string;
    price: number;
    sku: string;
    stock: number;
    category?: string;
    images?: string[];
}
