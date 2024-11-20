'use client';

import { Product } from "@/app/types";
import { FC, useState } from "react";

interface ProductOption {
    name: string;
    availableColors: string[];
    sizes: string[];
    price: string;
    description: string;
    productCode: string;
}

const product: ProductOption = {
    name: "Oversized Knit Sweater",
    availableColors: ["Beige", "Red", "Green"],
    sizes: ["S", "M", "L", "XL"],
    price: "$59.99",
    description:
        "Stay cozy with this oversized knit sweater featuring a relaxed silhouette and soft texture perfect for layering.",
    productCode: "123456789",
};

interface ProductProps {
    data: Product;
}

const ProductInformation: FC<ProductProps> = ({ data }) => {
    const [selectedColor, setSelectedColor] = useState<string>(product.availableColors[0]);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    const handleAddToBasket = () => {
        alert(`Added ${quantity} ${product.name}(s) in ${selectedColor}, Size: ${selectedSize} to your basket.`);
    };

    return (
        <div className="lg:w-1/2 w-full lg:m-8 m-2">
            <div className="pe-4 mx-auto">
                <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
                <p className="text-xl mb-4">{data.price} $</p>
                <p className="text-gray-600 mb-4">{data.description}</p>

                {/* Rating Section */}
                <div className="flex items-center text-gray-700 mb-4">
                    <span className="text-yellow-500 font-bold mr-1">{data.rating.rate}</span>
                    <span className="font-light text-sm">({data.rating.count} reviews)</span>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">Color:</label>
                    <div className="flex space-x-2">
                        {product.availableColors.map((color, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedColor(color)}
                                className={`w-8 h-8 rounded-full ${color === selectedColor ? 'ring-2 ring-black' : ''}`}
                                style={{ backgroundColor: color.toLowerCase() }}
                                aria-label={color}
                            ></button>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-1">Size:</label>
                    <select
                        className="p-2 border rounded w-full"
                        onChange={(e) => setSelectedSize(e.target.value)}
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Select size
                        </option>
                        {product.sizes.map((size, index) => (
                            <option key={index} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-1">Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        min="1"
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="p-2 border rounded w-full"
                    />
                </div>
                <button
                    onClick={handleAddToBasket}
                    disabled={!selectedSize}
                    className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 w-full"
                >
                    Add to Basket
                </button>
                <p className="text-sm text-gray-500 mt-4">Product Code: {product.productCode}</p>
            </div>
        </div>
    );
};

export default ProductInformation;
