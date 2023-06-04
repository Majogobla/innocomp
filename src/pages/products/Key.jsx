import { useState, useEffect } from "react";
import { formatPrice } from "../../helpers";

function Key({product}) 
{
  const [price, setPrice] = useState(product.precio);
  const [name, setName] = useState(product.nombre);
  const [card, setCard] = useState('');
  const [image, setImage] = useState(product.imagen1);

  useEffect(() => 
  {
    const newPrice = price < 2.5 ? 5 : price < 5 ? 10 : price < 8 ? 12 : price < 10 ? 15 : (price + 5);
    setPrice(newPrice);

    const card = name.toLowerCase().includes('card') || name.toLowerCase().includes('gift') || name.toLowerCase().includes('gold') || name.toLowerCase().includes('points') || name.toLowerCase().includes('pass') ? 'Desde' : '';
    setCard(card);
  },
  []);

  return (
    <div className="w-full overflow-hidden shadow-xl mt-5 bg-white mx-auto origin-center hover:rotate-6 hover:z-auto transition-transform flex flex-col">
      <div className=' h-60'>
        <img className=" object-cover object-center h-full w-full" src={image} alt="Sunset in the mountains"/>
      </div>

      <div className='w-full px-4 py-3 flex flex-col flex-1 justify-between'>
        <div className="font-extralight text-3xl mb-2 text-gray-500 text-center">{name}</div>

        <p className="w-full text-center bg-[#fb5910] rounded-lg text-2xl font-normal text-white py-1">{card} {formatPrice(price)}</p>
      </div>
    </div>
  )
};

export default Key;