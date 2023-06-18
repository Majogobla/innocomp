import { useState, useEffect } from "react";
import Key from "./Key";
import { keysIndexer, keysSearch } from "../../helpers";
import Paginator from "../../components/Paginator";

function Keys() 
{
  const [keys, setKeys] = useState([]);
  const [ascDesc, setAscDesc] = useState(true);
  const [sort, setSort] = useState('price');
  const [productsNumber, setProductsNumber] = useState(12);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pagesArray, setPagesArray] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [search, setSearch] = useState('');

  useEffect(() =>
  {
    if(search === '')
    {
      const products = keysIndexer(productsNumber, actualPage, ascDesc, sort, minPrice, maxPrice);
      setKeys(products.sliceArray);
      setPagesArray(products.arrayPages);
      setTotalPages(products.numberPages);
    }
  },
  [ascDesc, sort, productsNumber, actualPage, minPrice, maxPrice, search]);

  useEffect(() =>
  {
    if(search === '')
    {
      setActualPage(1);
    }
  },
  [ascDesc, sort, productsNumber, minPrice, maxPrice. search]);

  useEffect(() =>
  {
    if(search !== '')
    {
      const keysFiltered = keysSearch(search);
      setKeys(keysFiltered.sliceArray);
      setPagesArray(keysFiltered.arrayPages);
      setTotalPages(keysFiltered.numberPages);
    }
  },
  [search]);

  const previousPage = () =>
  {
    if(actualPage > 1)
    {
      setActualPage(actualPage - 1);
    } 
  }

  const nextPage = () =>
  {
    if(actualPage < totalPages)
    {
      setActualPage(actualPage + 1);
    }
  }

  const handleSetMinPrice = e =>
  {
    if(Number(e.target.value) < maxPrice)
    {
      setMinPrice(Number(e.target.value));
    }
  }

  const handleSetMaxPrice = e =>
  {
    if(Number(e.target.value) > minPrice)
    {
      setMaxPrice(Number(e.target.value));
    }
  }

  const handelSearch = e =>
  {
    e.preventDefault();

    if(e.target[0].value.trim().length > 3)
    {
      setSearch(e.target[0].value.trim());
    }
    else
    {
      setSearch('');
    }
  }

  return (
    <main className='flex-1 bg-neutral-50 pb-10'>
      <div className="max-w-screen-2xl mx-auto px-4">
        <form onSubmit={handelSearch} className="mt-10">   
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>

            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-xl text-gray-900 border-2 border-[#fb5910] rounded-lg bg-transparent focus:outline-none" placeholder="Buscar Gift Cards, Games, Software..." name="search"/>

            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#fb5910] hover:bg-[#AD3A05] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-4 py-2 transition-colors font-black">Buscar</button>
          </div>
        </form>

        {
          search === '' ?
          (
            <div className="flex flex-col md:grid md:grid-cols-6 gap-4">
              <div className="md:mt-28 pt-2 w-full">
                <div className="md:sticky md:top-10">
                  <div className="flex flex-col xl:flex-row xl:gap-2 xl:items-center ">
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

                  <div className="flex flex-col xl:flex-row xl:gap-2 xl:items-center mt-4 w-full">
                    <label htmlFor="sort" className="text-2xl font-extralight text-center">Ordernar: </label>

                    <div className="flex flex-1 gap-1">
                      <div className="px-1 border-gray-500 border rounded cursor-pointer" onClick={() => setAscDesc(!ascDesc)}>{ascDesc ? <div className="text-2xl text-center">&uarr;</div> : <div className="text-2xl text-center">&darr;</div>}</div>

                      <select id="sort" className="w-full text-center text-xl py-1 shadow" onChange={(e) => setSort(e.target.value)}>
                        <option  value="price">Precio</option>
                        <option value="name">Nombre</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col mt-4 w-full">
                    <label htmlFor="steps-range" className="text-2xl font-extralight text-center md:text-left">Precio Mínimo: ${minPrice}</label>

                    <input id="steps-range" type="range" min="0" max="100" value={minPrice} onChange={handleSetMinPrice} step="1" className="w-full h-2 rounded-lg appearance-none cursor-pointe bg-[#fb5910]"/>
                  </div>

                  <div className="flex flex-col mt-4 w-full">
                    <label htmlFor="steps-range" className="text-2xl font-extralight text-center md:text-left">Precio Máximo: ${maxPrice}</label>

                    <input id="steps-range" type="range" min="0" max="100" value={maxPrice} onChange={handleSetMaxPrice} step="1" className="w-full h-2 rounded-lg appearance-none cursor-pointe bg-[#fb5910]"/>
                  </div>
                </div>
              </div>

              <div className="w-full md:col-start-2 md:col-end-7 overflow-hidden px-3">
                <Paginator
                  previousPage={previousPage}
                  pagesArray={pagesArray}
                  setActualPage={setActualPage}
                  actualPage={actualPage}
                  nextPage={nextPage}
                />

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10'>
                  {
                    keys.map((key, index) =>
                    (
                      <Key key={index} product={key}/>
                    ))
                  }
                </div>

                <Paginator
                  previousPage={previousPage}
                  pagesArray={pagesArray}
                  setActualPage={setActualPage}
                  actualPage={actualPage}
                  nextPage={nextPage}
                />
              </div>
            </div>
          )
          :
          (
            <div className="w-full md:col-start-2 md:col-end-7 overflow-hidden px-4 py-10">
              <div className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10'>
                {
                  keys.map((key, index) =>
                  (
                    <Key key={index} product={key}/>
                  ))
                }
              </div>
            </div>
          )
        }

        
      </div>
    </main>
  )
};

export default Keys;