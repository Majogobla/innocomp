import React from 'react';
import { Link } from 'react-router-dom';
import laptops from '../../json/laptops.json';

function Laptop() 
{
  console.log(laptops);
  return (
    <main className='w-full flex-1 bg-neutral-50 overflow-hidden px-6'>
      <div className='container mx-auto my-10'>
        <h1 className='text-center text-5xl text-gray-700'>Portátiles</h1>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {
          laptops.map((laptop, index) =>
          (
              <div key={index} className="max-w-sm rounded overflow-hidden shadow-xl mt-5 bg-white mx-auto origin-center hover:rotate-6 hover:z-auto transition-transform flex flex-col">
                <div className='aspect-square'>
                  <img className="object-contain h-full w-full" src={laptop.image1} alt="Sunset in the mountains"/>
                </div>
                
                <div className="px-6 py-4 flex-1">
                  <div className="font-extralight text-2xl mb-2 text-gray-500">{laptop.name}</div>

                  <p className="text-gray-700 text-xl font-extralight">
                    {laptop.description}
                  </p>
                </div>
                
                <div className="px-6 pt-4 pb-2 flex justify-end">
                  <Link className="w-full text-center md:w-auto bg-[#fb5910] rounded-xl px-10 py-1 text-lg font-extralight text-white mb-2" to='/computadoras'>${laptop.sku}</Link>
                </div>
              </div>
          ))
        }
        
        </div>

        {/* <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className="max-w-sm rounded overflow-hidden shadow-xl mt-5 bg-white mx-auto origin-center hover:rotate-6 hover:z-auto transition-transform flex flex-col">
            <div className='w-full h-56'>
              <img className="object-cover h-full w-full" src={computer} alt="Sunset in the mountains"/>
            </div>
            
            <div className="px-6 py-4 flex-1">
              <div className="font-extralight text-2xl mb-2 text-gray-500">Computadoras de ecritorio</div>

              <p className="text-gray-700 text-xl font-extralight">
                Computadoras de escritorio para todos los propositos, Home Oficce, WorkStation, Gaming, lo mejor para tu necesidad.
              </p>
            </div>
            
            <div className="px-6 pt-4 pb-2 flex justify-end">
              <Link className="w-full text-center md:w-auto bg-[#fb5910] rounded-xl px-10 py-1 text-lg font-extralight text-white mb-2" to='/computadoras'>Visitar</Link>
            </div>
          </div> */}
      </div>
    </main>
  )
};

export default Laptop;