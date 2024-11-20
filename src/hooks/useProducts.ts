import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../utils/apiClient'; // Import the apiClient
import { Product } from '@/app/types';

//server-side request
export async function fetchProducts(): Promise<Product[]> {
  const response = await apiClient.get<Product[]>('https://fakestoreapi.com/products');
  return response;
}

// Client-side hook
export const useFetchProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};

//server-side request
export async function fetchProduct(id:string | string[]): Promise<Product> {
  const response = await apiClient.get<Product>(`https://fakestoreapi.com/products/${id}`);
  return response;
}

// Client-side hook
export const useFetchProduct = (id: string | string[]) => {
  return useQuery<Product, Error>({
    queryKey: ['product', id],
    queryFn: ()=> fetchProduct(id),
    enabled: !!id
  });
};
