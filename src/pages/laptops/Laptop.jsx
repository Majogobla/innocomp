import { useEffect, useState } from 'react';
import { formatPrice } from '../../helpers';

function Laptop({producto})
{
  const {name, price, description, brand, image1} = producto;
  const [ram, setRam] = useState('');
  const [windows, setwindows] = useState('');
  const [storage, setStorage] = useState('');
  const [storageType, setStorageType] = useState('');
  const [processor, setProcessor] = useState('');
  const [warranty, setWarranty] = useState('');
  const [whatsappMessage, setWhatsappMessage] = useState('');

  useEffect(() =>
  {
    const descriptionRam = description.toLowerCase().includes('-4 gb') ? '4 Gb' : description.toLowerCase().includes('-6 gb') ? '6 GB' : description.toLowerCase().includes('-8 gb') ? '8 GB' : description.toLowerCase().includes('-12 gb') ? '12 GB' : description.toLowerCase().includes('-16 gb') ? '16 GB' : description.toLowerCase().includes('-24 gb') ? '24 GB' : description.toLowerCase().includes('-32 gb') ? '32 GB' : '4GB / 8GB';
    setRam(descriptionRam);

    const descriptionWindows = description.toLowerCase().includes('windows 11') ? 'Windows 11' : 'Windows 10';
    setwindows(descriptionWindows);

    const descriptionStorage = description.toLowerCase().includes('-250 gb') || description.toLowerCase().includes('-256 gb') ? '250 GB' : description.toLowerCase().includes('-500 gb') || description.toLowerCase().includes('-512 gb') ? '500 GB' : description.toLowerCase().includes('-1024 gb') || description.toLowerCase().includes('-1 tb') || description.toLowerCase().includes('-1000 gb') ? '1 TB' : description.toLowerCase().includes('-2000 gb') || description.toLowerCase().includes('-2 tb') || description.toLowerCase().includes('-2048 gb') ? '2 TB' : '250 GB / 500GB';
    setStorage(descriptionStorage);

    const descriptionStorageType = description.toLowerCase().includes('ssd') ? 'SSD' : 'HDD';
    setStorageType(descriptionStorageType);

    const descriptionProcessor = description.split('-')[0];
    setProcessor(descriptionProcessor);

    const descriptionWarranty = description.toLowerCase().includes('1-year') ? '1 Año' : 'Consultar';
    setWarranty(descriptionWarranty);

    setWhatsappMessage(encodeURIComponent(`Hola,\nestoy interesado en el producto -> ${name}\nmarca -> ${brand}\nprecio -> ${formatPrice(price)}`));
  },
  [producto]);

  return (
    <div className="w-full overflow-hidden shadow-xl bg-white mx-auto origin-center hover:rotate-3 hover:z-auto transition-transform flex flex-col">
      <div className='aspect-square flex items-center justify-center'>
        <img className="object-contain" src={image1} alt={`${name} image`}/>
      </div>

      <div className='w-full px-4 pb-2 flex flex-col flex-1 justify-between'>
        <div className="border-t-2 border-[#fb5910] px-4 pt-4">
          <div className="font-extralight text-3xl mb-2 text-gray-500">{name}</div>

          <p className='text-[#fb5910] font-bold text-2xl'>Procesador:<span className='text-black font-extralight ml-2'>{processor}</span></p>
          <p className='text-[#fb5910] font-bold text-2xl'>Garantía:<span className='text-black font-extralight ml-2'>{warranty}</span></p>
          <p className='text-[#fb5910] font-bold text-2xl'>Storage:<span className='text-black font-extralight ml-2'>{storage + ' ' + storageType}</span></p>

          <p className='text-[#fb5910] font-bold text-2xl'>Marca:<span className='text-black font-extralight ml-2'>{brand}</span></p>
          <p className='text-[#fb5910] font-bold text-2xl'>RAM:<span className='text-black font-extralight ml-2'>{ram}</span></p>
          <p className='text-[#fb5910] font-bold text-2xl'>SO:<span className='text-black font-extralight ml-2'>{windows}</span></p>
        </div>
        
        <a target='_blank' href={`https://wa.me/50360472885?text=${whatsappMessage}`} className="w-full mt-4 mb-2 flex items-center justify-center gap-2 bg-[#fb5910] hover:bg-[#AD3A05] hover:scale-110 transition-all rounded-xl px-4 py-1 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill='white'>
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <p className="text-2xl font-normal text-white">{formatPrice(price)}</p>
        </a>
      </div>
    </div>
  )
};

export default Laptop;