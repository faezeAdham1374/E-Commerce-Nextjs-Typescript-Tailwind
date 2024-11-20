import CategoryProducts from '@/Containers/CategoryProducts';
import { Product } from '@/app/types';
import { fetchCategoryProducts } from '@/hooks/useCategories';

interface PageProps {
  params: { title: string };
}

export default async function Page({ params }: PageProps) {
  const { title } = params; 

  try {
    const data: Product[] = await fetchCategoryProducts(title);
    return (
      <div>
        <CategoryProducts data={data} />
      </div>
    );
  } catch {
    return <div>Product not found.</div>;
  }
}
