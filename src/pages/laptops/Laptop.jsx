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
  },
  [])

  return (
    <div className="w-full overflow-hidden shadow-xl bg-white mx-auto origin-center hover:rotate-6 hover:z-auto transition-transform flex flex-col">
      <div className='aspect-square'>
        <img className="object-contain h-full w-full" src={image1} alt="Sunset in the mountains"/>
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
        
        <div className="pt-4 mb-2 flex">
          <p className="w-full text-center bg-[#fb5910] rounded-xl px-10 py-1 text-2xl font-normal text-white">{formatPrice(price)}</p>
        </div>
      </div>
    </div>
  )
};

export default Laptop;