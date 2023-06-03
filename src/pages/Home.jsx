import React from 'react';
import computer from '../img/computer.jpg';

function Home() 
{
  return (
    <main className='w-full flex-1 bg-neutral-50'>
      <div className='container mx-auto mt-10'>
        <h1 className='text-center text-5xl'>Categorías</h1>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className="max-w-sm rounded overflow-hidden shadow-xl mt-5 bg-white mx-auto">
            <img className="w-full" src={computer} alt="Sunset in the mountains"/>
            
            <div className="px-6 py-4">
              <div className="font-extralight text-2xl mb-2">Computadoras de ecritorio</div>

              <p className="text-gray-700 text-xl font-extralight">
                Computadoras de escritorio para todos los propositos, Home Oficce, WorkStation, Gaming, lo mejor para tu necesidad.
              </p>
            </div>
            
            <div className="px-6 pt-4 pb-2 flex justify-end">
              <span className="inline-block bg-[#fb5910] rounded-xl px-10 py-1 text-lg font-extralight text-white mr-2 mb-2">Visitar</span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-xl mt-5 bg-white mx-auto">
            <img className="w-full" src={computer} alt="Sunset in the mountains"/>
            
            <div className="px-6 py-4">
              <div className="font-extralight text-2xl mb-2">Laptops</div>

              <p className="text-gray-700 text-xl font-extralight">
                Computadoras de escritorio para todos los propositos, Home Oficce, WorkStation, Gaming, lo mejor para tu necesidad.
              </p>
            </div>
            
            <div className="px-6 pt-4 pb-2 flex justify-end">
              <span className="inline-block bg-[#fb5910] rounded-xl px-10 py-1 text-lg font-extralight text-white mr-2 mb-2">Visitar</span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-xl mt-5 bg-white mx-auto">
            <img className="w-full" src={computer} alt="Sunset in the mountains"/>
            
            <div className="px-6 py-4">
              <div className="font-extralight text-2xl mb-2">Consumibles</div>

              <p className="text-gray-700 text-xl font-extralight">
                Computadoras de escritorio para todos los propositos, Home Oficce, WorkStation, Gaming, lo mejor para tu necesidad.
              </p>
            </div>
            
            <div className="px-6 pt-4 pb-2 flex justify-end">
              <span className="inline-block bg-[#fb5910] rounded-xl px-10 py-1 text-lg font-extralight text-white mr-2 mb-2">Visitar</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};

export default Home;