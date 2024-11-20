
'use client';

import Breadcrumb from "@/Components/BreadCrumb";
import ProductCard from "@/Components/ProductCard";
import { Product } from "@/app/types";
import { FC } from "react";

interface Props {
    data: Product[]
}

const CategoryProducts: FC<Props> = ({ data }) => {
    const breadCrumb = [
        {
            label: 'home',
            path: '/'
        },
        {
            label: 'category',
            path: '/'
        }
    ]
    return (
        <div className="flex flex-col">
        {/* <Breadcrumb items={breadCrumb} /> */} 
            <div className="grid mt-4 grid-cols-1 lg:grid-cols-4 gap-3 container mx-auto lg:px-0 px-2">
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
        </div>
    )
}

export default CategoryProducts;

