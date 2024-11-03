
'use client';

import ProductInformation from "@/Components/ProductInformation";
import dynamic from "next/dynamic";
import { FC, useState } from "react";

const ProductSlider = dynamic(() => import('../Components/ProductSlider'), {
    ssr: false,
});


const Product: FC = () => {


    return (
        <div className='flex lg:flex-row flex-col lg:justify-between'>
                 <ProductSlider />
            <ProductInformation />
       
        </div>
    )
}

export default Product;