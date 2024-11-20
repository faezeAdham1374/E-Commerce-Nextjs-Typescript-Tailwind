
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: any;
  id:number
}

const ProductCard: FC<ProductCardProps> = ({ name, price,id, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:transition-shadow transition-all">
      <div className="relative h-64">
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: 'contain' }}
          className="w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-1">${price.toFixed(2)}</p>
        <Link href={`/product/${id}`}>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
