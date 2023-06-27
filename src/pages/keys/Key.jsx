import { useState, useEffect } from "react";
import { formatPrice } from "../../helpers";

function Key({product}) 
{
  const [price, setPrice] = useState(0);
  const [card, setCard] = useState('');

  const { nombre, precio, imagen1 } = product;

  useEffect(() => 
  {
    const card = nombre.toLowerCase().includes('card') || nombre.toLowerCase().includes('gift') || nombre.toLowerCase().includes('gold') || nombre.toLowerCase().includes('points') || nombre.toLowerCase().includes('pass') ? 'Desde' : '';
    setCard(card);

    const newPrice = nombre.toLowerCase().includes('windows 10') || nombre.toLowerCase().includes('windows 11') ? 11.95 : nombre.toLowerCase().includes('office') ? 20 : nombre.toLowerCase().includes('eset') || nombre.toLowerCase().includes('mcafe') ? 15 : nombre.toLowerCase().includes('kaspersky') ? 25 : precio;
    setPrice(newPrice);
  },
  [product]);

  return (
    <div className="w-full overflow-hidden shadow-xl bg-white mx-auto origin-center hover:rotate-6 hover:z-auto transition-transform flex flex-col rounded-lg">
      <div className=' h-60'>
        <img className=" object-cover object-top h-full w-full" src={imagen1} alt="Sunset in the mountains"/>
      </div>

      <div className='w-full px-4 py-3 flex flex-col flex-1 justify-between'>
        <div className="font-extralight text-3xl mb-2 text-gray-500 text-center">{nombre}</div>

        <p className="w-full text-center bg-[#fb5910] rounded-lg text-2xl font-normal text-white py-1">{card} {formatPrice(price)}</p>
      </div>
    </div>
  )
};

export default Key;