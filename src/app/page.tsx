import Home from '@/Containers/Home';
import { fetchProducts } from '@/hooks/useProducts';
import { Product } from '@/app/types';

export default async function Page() {
  try {
    const data: Product[] = await fetchProducts();
    return (
      <div>
        <Home data={data} isLoading={false} error={null} />
      </div>
    );
  } catch (error: any) {
    return (
      <div>
        <Home data={undefined} isLoading={false} error={error} />
      </div>
    );
  }
}
