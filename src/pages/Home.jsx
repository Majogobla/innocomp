import React from 'react';
import { Link } from 'react-router-dom';
import computer from '../img/computer.jpg';
import laptop from '../img/laptop.jpg';
import consumables from '../img/consumables.jpg';
import games from '../img/games.jpg';

function Home() 
{
  return (
    <main className='w-full flex-1 bg-neutral-50 overflow-hidden px-6'>
      <div className='container mx-auto my-10'>
        <h1 className='text-center text-5xl text-gray-700'>Categorías</h1>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* <div className="max-w-sm rounded overflow-hidden shadow-xl mt-5 bg-white mx-auto origin-center hover:rotate-6 hover:z-auto transition-transform flex flex-col">
            <div className='w-full h-56'>
              <img className="object-cover h-full w-full" src={computer} alt="Sunset in the mountains"/>
            </div>
            
            <div className="px-6 py-4 flex-1">
              <div className="font-extralight text-2xl mb-2 text-gray-500">Computadoras de escritorio</div>

              <p className="text-gray-700 text-xl font-extralight">
                Computadoras de escritorio para todos los propositos, Home Oficce, WorkStation, Gaming, lo mejor para tu necesidad.
              </p>
            </div>
            
            <div className="px-6 pt-4 pb-2 flex justify-end">
              <Link className="w-full text-center md:w-auto bg-[#fb5910] rounded-xl px-10 py-1 text-lg font-extralight text-white mb-2" to='/computadoras'>Visitar</Link>
            </div>
          </div> */}

          <div className="max-w-sm rounded overflow-hidden shadow-xl mt-5 bg-white mx-auto origin-center hover:rotate-6 hover:z-auto transition-transform flex flex-col">
            <div className='w-full h-56'>
              <img className="object-cover h-full w-full" src={laptop} alt="Sunset in the mountains"/>
            </div>
            
            <div className="px-6 py-4 flex-1">
              <div className="font-extralight text-2xl mb-2 text-gray-500">Laptops</div>

              <p className="text-gray-700 text-xl font-extralight flex-1">
                Laptos de para todos los propositos, Home Office, Performance y Gaming, lo mejor para tu necesidad.
              </p>
            </div>
            
            <div className="px-6 pt-4 pb-2 flex justify-end">
              <Link className="w-full text-center md:w-auto bg-[#fb5910] rounded-xl px-10 py-1 text-lg font-extralight text-white mb-2" to='/portatiles'>Visitar</Link>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-xl mt-5 bg-white mx-auto origin-center hover:rotate-6 hover:z-auto transition-transform flex flex-col">
            <div className='w-full h-56'>
              <img className="object-cover h-full w-full" src={consumables} alt="Sunset in the mountains"/>
            </div>
            
            <div className="px-6 py-4 flex-1">
              <div className="font-extralight text-2xl mb-2 text-gray-500">Consumibles</div>

              <p className="text-gray-700 text-xl font-extralight flex-1">
                La mejor en opción en artículos de oficina para tu negocio, tintas, recargables, impresoras, scanners, protecciones, lo que desees lo encuentras con nosotros.
              </p>
            </div>
            
            <div className="px-6 pt-4 pb-2 flex justify-end">
              <Link className="w-full text-center md:w-auto bg-[#fb5910] rounded-xl px-10 py-1 text-lg font-extralight text-white mb-2" to='/consumibles'>Visitar</Link>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-xl mt-5 bg-white mx-auto origin-center hover:rotate-6 hover:z-auto transition-transform flex flex-col">
            <div className='w-full h-56'>
              <img className="object-cover h-full w-full" src={games} alt="Sunset in the mountains"/>
            </div>
            
            <div className="px-6 py-4 flex-1">
              <div className="font-extralight text-2xl mb-2 text-gray-500">Games & Keys</div>

              <p className="text-gray-700 text-xl font-extralight flex-1">
                El mejor y más grande catálogo de keys para software y videojuegos que te puedas encontrar, a solo un click de lo que necesites, entra y compruébalo.
              </p>
            </div>
            
            <div className="px-6 pt-4 pb-2 flex justify-end">
              <Link className="w-full text-center md:w-auto bg-[#fb5910] rounded-xl px-10 py-1 text-lg font-extralight text-white mb-2" to='/keys'>Visitar</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};

export default Home;