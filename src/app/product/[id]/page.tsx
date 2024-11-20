import ProductDetails from '@/Containers/Product';
import { Product } from '@/app/types';
import { fetchProduct } from '@/hooks/useProducts';

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = params; 

  try {
    const data: Product = await fetchProduct(id);
    return (
      <div>
        <ProductDetails data={data} />
      </div>
    );
  } catch {
    return <div>Product not found.</div>;
  }
}
