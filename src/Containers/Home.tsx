'use client';

import ProductCard from '@/Components/ProductCard';
import SimpleSlider from '@/Components/SimpleSlider';
import { FC } from 'react';
import { Product } from '@/app/types';


interface HomeProps {
  error:any,
  isLoading:boolean,
  data:Product[] | undefined
}
const Home: FC<HomeProps> = ({error , isLoading , data})=> {
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <section className="flex flex-col">
      <SimpleSlider />
      <br />
      <br />
      <h3 className='font-bold text-center mb-4 text-lg'>New Collection</h3>
      <br />
      <div className="container mx-auto lg:px-0 px-2">
        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((item, index) => {
              return (
                <div className="animate-pulse h-64 bg-slate-50 rounded-sm flex flex-col p-2 gap-2" key={index}>
                  <div className='rounded-sm bg-slate-200 h-32 w-full'></div>
                  <div className="rounded-lg bg-slate-200 h-4 w-2/3"></div>
                  <div className="rounded-lg bg-slate-200 h-4 w-1/3"></div>
                  <div className="rounded-lg bg-slate-200 h-10 w-1/3 mt-2"></div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="grid  grid-cols-1 lg:grid-cols-4 gap-3">
            {data && data.map((item: any) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.title}
                price={item.price}
                imageUrl={item.image}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default  Home;