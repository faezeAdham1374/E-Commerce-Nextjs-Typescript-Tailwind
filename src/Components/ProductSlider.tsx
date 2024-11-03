'use client';

import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';
import img1 from "@/app/images/alisa-anton-TF_J4yTvg70-unsplash.jpg";
import img2 from "@/app/images/candice-picard-MP0IUfwrn0A-unsplash.jpg";
import img3 from "@/app/images/candice-picard-t0r8gxq4irQ-unsplash.jpg";
import img4 from "@/app/images/nathan-dumlao-LG8_B2TIMV4-unsplash.jpg";

const images = [img1, img2, img3, img4];

interface ProductOption {
    name: string;
    availableColors: string[];
    sizes: string[];
    price: string;
    description: string;
    productCode: string;
}

const ProductSlider: React.FC = () => {
    const product: ProductOption = {
        name: "Oversized Knit Sweater",
        availableColors: ["Beige", "red", "green"],
        sizes: ["S", "M", "L", "XL"],
        price: "$59.99",
        description:
            "Stay cozy with this oversized knit sweater featuring a relaxed silhouette and soft texture perfect for layering.",
        productCode: "123456789",
    };

    const [nav1, setNav1] = useState<Slider | undefined>(undefined);
    const [nav2, setNav2] = useState<Slider | undefined>(undefined);
    const [selectedColor, setSelectedColor] = useState<string>(product.availableColors[0]);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    const handleAddToBasket = () => {
        alert(`Added ${quantity} ${product.name}(s) in ${selectedColor}, Size: ${selectedSize} to your basket.`);
    };

    const mainSettings = {
        asNavFor: nav2 || undefined, // Ensure this is not null
        ref: (slider: Slider) => setNav1(slider),
        dots: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true, // Smooth fade effect for transitions
    };

    const thumbSettings = {
        asNavFor: nav1 || undefined, // Ensure this is not null
        ref: (slider: Slider) => setNav2(slider),
        slidesToShow: 4,
        swipeToSlide: true,
        focusOnSelect: true,
    };



    return (
        <div className='flex justify-between my-8 mx-8'>
            <div className='w-1/2'>
                <div className=" pe-4 mx-auto">
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
            <div className="w-1/2">
                <Slider {...mainSettings} className="mainSlider h-60vh overflow-hidden">
                    {images.map((image, index) => (
                        <div key={index} className="w-full  bg-slate-100">
                            <Image
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full max-h-[500px] object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </Slider>
                <Slider {...thumbSettings} className="thumbSlider mt-2">
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-full p-1">
                            <Image
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full max-h-32 object-cover border border-gray-300 cursor-pointer"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductSlider;
