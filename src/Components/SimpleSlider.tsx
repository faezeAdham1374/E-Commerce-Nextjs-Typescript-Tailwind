import { FC } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import Image from 'next/image';
import img1 from "../app/images/alisa-anton-TF_J4yTvg70-unsplash.jpg";
import img2 from "../app/images/candice-picard-MP0IUfwrn0A-unsplash.jpg";
import img3 from "../app/images/candice-picard-t0r8gxq4irQ-unsplash.jpg";
import img4 from "../app/images/nathan-dumlao-LG8_B2TIMV4-unsplash.jpg";

const SimpleSlider: FC = () => {

    const data = [{image: img1},{image: img2},{image: img3},{image: img4} ]
    return (
        <div className={"lg:rounded-xl overflow-hidden mb-8"}>
            <Splide options={{
                lazyLoad: 'sequential',
                rewind: true,
                width: "100vw",
                arrows: false,
                direction: "rtl"
            }}>
                {
                    data.map((item: any, index: any) => {
                        return (
                            <SplideSlide key={index} className='flex justify-center'>
                                {
                                    <div className={"block object-contain w-full bg-slate-100 overflow-hidden h-[calc(100vh-300px)]"}>
                                        <Image
                                            src={item.image}
                                            alt={`Slide ${index}`}
                                            className="object-contain mx-auto h-[calc(100vh-300px)]"
                                            priority
                                        />
                                    </div>
                                }
                            </SplideSlide>
                        )
                    })
                }
            </Splide>
        </div>
    )
}
export default SimpleSlider;

