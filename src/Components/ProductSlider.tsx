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

const ProductSlider: React.FC = () => {
   
    const [nav1, setNav1] = useState<Slider | undefined>(undefined);
    const [nav2, setNav2] = useState<Slider | undefined>(undefined);

    const mainSettings = {
        asNavFor: nav2 || undefined,
        ref: (slider: Slider) => setNav1(slider),
        dots: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true, 
    };

    const thumbSettings = {
        asNavFor: nav1 || undefined, 
        ref: (slider: Slider) => setNav2(slider),
        slidesToShow: 4,
        swipeToSlide: true,
        focusOnSelect: true,
    };

    return (
            <div className="w-full lg:w-1/2 lg:m-8">
                <Slider {...mainSettings} className="mainSlider h-60vh overflow-hidden">
                    {images.map((image, index) => (
                        <div key={index} className="w-full  bg-slate-100">
                            <Image
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full max-h-[250px] lg:max-h-[500px] object-contain transition-transform duration-300 hover:scale-105"
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
                                className="w-full max-h-16 lg:max-h-32 object-cover border border-gray-300 cursor-pointer"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
    );
};

export default ProductSlider;
