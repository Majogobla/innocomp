import { useState, useEffect } from "react";
import Key from "./Key";
import keysData from '../../json/keys.json';

function Keys() 
{
  const [keys, setKeys] = useState([]);

  useEffect(()=>
  {
    let keyssDataSort = keysData.sort((a, b) => a.precio - b.precio);
    keyssDataSort = keyssDataSort.filter(keyState => keyState.precio > 0);
    setKeys(keyssDataSort);
  },
  []);

  return (
    <main className='w-full flex-1 bg-neutral-50 overflow-hidden px-6'>
      <div className='container mx-auto my-10'>
        <h1 className='text-center text-5xl text-gray-700'>Games & Keys</h1>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
          {
            keys.map((key, index) =>
            (
              <Key key={index} product={key}/>
            ))
          }
        </div>
      </div>
    </main>
  )
};

export default Keys;