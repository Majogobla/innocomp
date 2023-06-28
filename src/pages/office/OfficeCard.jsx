import { formatPrice } from "../../helpers";

function OfficeCard({product}) 
{
  const { name, price, image_1 } = product;

  return (
    <div className="w-full overflow-hidden shadow-xl bg-white mx-auto origin-center hover:rotate-6 hover:z-auto transition-transform flex flex-col rounded-lg">
      <div className=' h-60'>
        <img className=" object-cover object-top h-full w-full" src={image_1} alt="Sunset in the mountains"/>
      </div>

      <div className='w-full px-4 py-3 flex flex-col flex-1 justify-between'>
        <div className="font-extralight text-3xl mb-2 text-gray-500 text-center">{name}</div>

        <p className="w-full text-center bg-[#fb5910] rounded-lg text-2xl font-normal text-white py-1">{formatPrice(price)}</p>
      </div>
    </div>
  )
};

export default OfficeCard;