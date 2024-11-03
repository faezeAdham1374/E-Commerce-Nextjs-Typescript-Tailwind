'use client'

import SkyImage from '@/app/images/karen-cantu-q-uYF7pziBO8Y-unsplash.jpg';
import Scarf from '@/app/images/marvin-meyer-1wuQb199oQg-unsplash.jpg';
import WarmScarf from '@/app/images/greta-arday-s2DVCOKqbBg-unsplash.jpg';
import Hat from "@/app/images/oleg-ivanov-AA5DVdw2_yY-unsplash.jpg";
import ProductCard from '@/Components/ProductCard';
import SimpleSlider from '@/Components/SimpleSlider';

export default function Home() {
  const fakeData = [{
    id: 0,
    name: "the sky birds Tshirt",
    image: SkyImage,
    price: 22000
  },
  {
    id: 1,
    name: "SCARF",
    image: Scarf,
    price: 1150
  },
  {
    id: 2,
    name: "Hat",
    image: Hat,
    price: 500
  },
  {
    id: 3,
    name: "Warm Scarf",
    image: WarmScarf,
    price: 8700
  }]
  
  return (
    <section className="flex flex-col">
      <SimpleSlider   />
      <br/>
      <br/>
      <h3 className= 'font-bold text-center mb-4 text-lg'>New Collection</h3>
      <br/>
      <div className= "container mx-auto">
        <div className= "flex justify-between gap-4">
          {fakeData.map((item) => (
            <ProductCard key={item.id} name={item.name} price={item.price} imageUrl={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
