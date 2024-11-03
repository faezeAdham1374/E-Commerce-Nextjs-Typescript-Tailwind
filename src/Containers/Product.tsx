
import dynamic from "next/dynamic";
import { FC } from "react";

const ProductSlider = dynamic(() => import('../Components/ProductSlider'), {
    ssr: false,
  });

interface ProductProps {

}

const Product: FC<ProductProps> = () => {
    return (
        <div>
            <ProductSlider/>
        </div>
    )
}

export default Product;