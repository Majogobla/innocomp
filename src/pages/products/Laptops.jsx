import { useEffect, useState } from 'react';
import laptopsData from '../../json/laptops.json';
import Laptop from './Laptop';

function Laptops() 
{
  const [laptops, setLaptops] = useState([]);

  useEffect(()=>
  {
    const laptopsDataSort = laptopsData.sort((a, b) => a.price - b.price);
    setLaptops(laptopsDataSort);
  },
  []);

  return (
    <main className='w-full flex-1 bg-neutral-50 overflow-hidden px-6'>
      <div className='container mx-auto my-10'>
        <h1 className='text-center text-5xl text-gray-700'>Portátiles</h1>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
          {
            laptops.map((laptop, index) =>
            (
              <Laptop key={index} producto={laptop}/>
            ))
          }
        </div>
      </div>
    </main>
  )
};

export default Laptops;