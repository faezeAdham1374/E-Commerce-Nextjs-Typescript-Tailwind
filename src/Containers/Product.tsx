
'use client';

import ProductInformation from "@/Components/ProductInformation";
import { Product } from "@/app/types";
import dynamic from "next/dynamic";
import { FC } from "react";

const ProductSlider = dynamic(() => import('../Components/ProductSlider'), {
    ssr: false,
});

interface ProductProps {
    data: Product
}

const Product: FC<ProductProps> = ({data }) =>{
    return (
        <div className='flex lg:flex-row flex-col lg:justify-between'>
            <ProductSlider />
            <ProductInformation data = {data}/>
        </div>
    )
}

export default Product;

