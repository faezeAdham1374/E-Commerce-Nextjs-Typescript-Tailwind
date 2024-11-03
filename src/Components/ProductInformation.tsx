


'use client';

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
    availableColors: ["Beige", "red", "green"],
    sizes: ["S", "M", "L", "XL"],
    price: "$59.99",
    description:
        "Stay cozy with this oversized knit sweater featuring a relaxed silhouette and soft texture perfect for layering.",
    productCode: "123456789",
};

const ProductInformation: FC = () => {

    const [selectedColor, setSelectedColor] = useState<string>(product.availableColors[0]);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    const handleAddToBasket = () => {
        alert(`Added ${quantity} ${product.name}(s) in ${selectedColor}, Size: ${selectedSize} to your basket.`);
    };
    return (
        <div className='lg:w-1/2 w-full lg:m-8 m-2'>
            <div className="pe-4 mx-auto">
                {/* Product Name */}
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

                {/* Price */}
                <p className="text-xl mb-4">{product.price}</p>

                {/* Description */}
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Color Options */}
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

                {/* Size Selector */}
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

                {/* Quantity Selector */}
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

                {/* Add to Basket Button */}
                <button
                    onClick={handleAddToBasket}
                    disabled={!selectedSize}
                    className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 w-full"
                >
                    Add to Basket
                </button>

                {/* Product Code */}
                <p className="text-sm text-gray-500 mt-4">Product Code: {product.productCode}</p>
            </div>
        </div>
    )

}

export default ProductInformation;