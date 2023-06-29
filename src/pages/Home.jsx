import React from 'react';
import { Link } from 'react-router-dom';
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
          <div className="max-w-sm rounded overflow-hidden shadow-xl mt-5 bg-white mx-auto origin-center hover:rotate-6 hover:z-auto transition-transform flex flex-col">
            <div className='w-full h-56'>
              <img className="object-cover h-full w-full" src={laptop} alt="computers image"/>
            </div>
            
            <div className="px-6 py-4 flex-1">
              <div className="font-extralight text-2xl mb-2 text-gray-500">Tecnología</div>

              <p className="text-gray-700 text-xl font-extralight flex-1">
                Computadoras, laptops y tables para todos los propositos, Home Office, Performance y Gaming, lo mejor para tu necesidad.
              </p>
            </div>
            
            <div className="px-6 pt-4 pb-2 flex justify-end">
              <Link className="w-full text-center md:w-auto bg-[#fb5910] rounded-xl px-10 py-1 text-lg font-extralight text-white mb-2" to='/tecnologia'>Visitar</Link>
            </div>
          </div>

          {/* <div className="max-w-sm rounded overflow-hidden shadow-xl mt-5 bg-white mx-auto origin-center hover:rotate-6 hover:z-auto transition-transform flex flex-col">
            <div className='w-full h-56'>
              <img className="object-cover h-full w-full" src={consumables} alt="Sunset in the mountains"/>
            </div>
            
            <div className="px-6 py-4 flex-1">
              <div className="font-extralight text-2xl mb-2 text-gray-500">Productos de Oficina</div>

              <p className="text-gray-700 text-xl font-extralight flex-1">
                La mejor en opción en artículos de oficina para tu negocio, tintas, recargables, impresoras, scanners, protecciones, lo que desees lo encuentras con nosotros.
              </p>
            </div>
            
            <div className="px-6 pt-4 pb-2 flex justify-end">
              <Link className="w-full text-center md:w-auto bg-[#fb5910] rounded-xl px-10 py-1 text-lg font-extralight text-white mb-2" to='/office'>Visitar</Link>
            </div>
          </div> */}

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

      <div className='container mx-auto mb-10 mt-20'>
        <h1 className='text-center text-5xl text-gray-700'>Contáctenos</h1>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
          <div>
            <a target='_blank' href="https://wa.me/50360472885" className="w-full flex flex-col items-center gap-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 24 24" fill='black'>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>

              <p className="text-2xl font-normal text-[#fb5910] mt-4">WhatsApp: <span className='text-black'>+503 60472885</span></p>
            </a>
          </div>
            
          <div>
            <a target='_blank' href="https://www.facebook.com/innocomp.sv" className="w-full flex flex-col items-center gap-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24"  fill='black' viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>

              <p className="text-2xl font-normal text-[#fb5910] mt-4">Facebok: <span className='text-black'>InnoComp El Salvador</span></p>
            </a>
          </div>

          <div>
            <a target='_blank' href="https://www.instagram.com/innocomp.sv/" className="w-full flex flex-col items-center gap-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24"  fill='black' viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>

              <p className="text-2xl font-normal text-[#fb5910] mt-4">Instagram: <span className='text-black'>innocomp.sv</span></p>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
};

export default Home;