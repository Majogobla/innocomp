import { useState, useEffect } from "react";
import Key from "./Key";
import { keysIndexer } from "../../helpers";

function Keys() 
{
  const [keys, setKeys] = useState([]);
  const [ascDesc, setAscDesc] = useState(true);
  const [sort, setSort] = useState('price');
  const [productsNumber, setProductsNumber] = useState(12);
  const [pagesNumber, setPagesNumber] = useState(1);
  const [actualPage, setActualPage] = useState(1);

  useEffect(() =>
  {
    const products = keysIndexer(productsNumber, actualPage, ascDesc, sort);
    setKeys(products.sliceArray);
    setPagesNumber(products.numberPages);
  },
  [ascDesc, sort, productsNumber, actualPage])

  return (
    <main className='w-full flex-1 bg-neutral-50 overflow-hidden px-6'>
      <div className='container mx-auto my-10'>
        <h1 className='text-center text-5xl text-gray-700'>Games & Keys</h1>

        <div className="flex w-full justify-end py-6">
          <ul className="inline-flex -space-x-px w-full md:w-5/6 justify-center">
            <li>
              <button className="px-3 py-2 ml-0 leading-tight border border-gray-500 hover:bg-[#fb5910] hover:text-white rounded-l-lg">Previous</button>
            </li>

            {
              [...Array(pagesNumber)].map((_, index) =>
              (
                <li key={index}>
                  <button className={`${actualPage === (index + 1) ? 'bg-[#fb5910] text-white' : 'hover:bg-[#fb5910] hover:text-white'} px-3 py-2 ml-0 leading-tight border border-gray-500 `} onClick={() => setActualPage(index + 1)}>{(index + 1)}</button>
                </li>
              ))
            }

            <li>
              <button className="px-3 py-2 leading-tight border border-gray-500 hover:bg-[#fb5910] hover:text-white rounded-r-lg">Next</button>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/6">
            <div className="flex flex-col lg:flex-row gap-2 justify-center items-center">
              <label htmlFor="sort" className="text-2xl font-extralight text-center">Cantidad: </label>

              <div className="flex flex-1 gap-1">
                <select id="sort" className="w-full text-center text-xl py-1 shadow" onChange={(e) => setProductsNumber(Number(e.target.value))}>
                  <option  value="12">12</option>
                  <option value="24">24</option>
                  <option value="36">36</option>
                  <option value="48">48</option>
                  <option value="60">60</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-2 justify-center items-center mt-4">
              <label htmlFor="sort" className="text-2xl font-extralight text-center">Ordernar: </label>

              <div className="flex flex-1 gap-1">
                <div className="px-1 border-gray-500 border rounded cursor-pointer" onClick={() => setAscDesc(!ascDesc)}>{ascDesc ? <div className="text-2xl text-center">&uarr;</div> : <div className="text-2xl text-center">&darr;</div>}</div>

                <select id="sort" className="w-full text-center text-xl py-1 shadow" onChange={(e) => setSort(e.target.value)}>
                  <option  value="price">Precio</option>
                  <option value="name">Nombre</option>
                </select>
              </div>
            </div>
          </div>

          <div className='w-full md:w-5/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {
              keys.map((key, index) =>
              (
                <Key key={index} product={key}/>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
};

export default Keys;