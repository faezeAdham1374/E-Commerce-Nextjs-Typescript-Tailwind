
import { Product } from '@/app/types';
import { apiClient } from '../utils/apiClient';

//server-side request
export async function fetchCategories(): Promise<[]> {
    try {
        const response = await apiClient.get<[]>('https://fakestoreapi.com/products/categories');
        return response;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];

    }
}

export async function fetchCategoryProducts(title:string | string[]): Promise<Product[]> {
    const response = await apiClient.get<Product[]>(`https://fakestoreapi.com/products/category/${title}`);
    return response;
  }
