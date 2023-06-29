import { useEffect, useState } from 'react';
import { computersIndexer, computersSearch } from '../../helpers';
import ComputerCard from './ComputerCard';
import QuantityFilter from '../../components/Filter/QuantityFilter';
import OrderFilter from '../../components/Filter/OrderFilter';
import MinMaxPriceFilter from '../../components/Filter/MinMaxPriceFilter';
import CheckFilter from '../../components/Filter/CheckFilter';
import Searcher from '../../components/Filter/Searcher';
import Paginator from "../../components/Paginator";

function Computers() 
{
  const max = 2900;
  const [computers, setComputers] = useState([]);
  const [ascDesc, setAscDesc] = useState(true);
  const [sort, setSort] = useState('price');
  const [productsNumber, setProductsNumber] = useState(12);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pagesArray, setPagesArray] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(max);
  const [brandFilter, setBrandFilter] = useState(['all']);
  const [subcategoryFilter, setSubcategoryFilter] = useState(['all']);
  const [search, setSearch] = useState('');

  useEffect(() =>
  {
    if(search === '')
    {
      const products = computersIndexer(productsNumber, actualPage, ascDesc, sort, minPrice, maxPrice, brandFilter, subcategoryFilter);
      setComputers(products.sliceArray);
      setPagesArray(products.arrayPages);
      setTotalPages(products.numberPages);
    }
  },
  [ascDesc, sort, productsNumber, actualPage, minPrice, maxPrice, search, brandFilter, subcategoryFilter]);

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
      const laptopsFiltered = computersSearch(search);
      setComputers(laptopsFiltered.sliceArray);
      setPagesArray(laptopsFiltered.arrayPages);
      setTotalPages(laptopsFiltered.numberPages);
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

    if(e.target[0].value.trim().length >= 2)
    {
      setSearch(e.target[0].value.trim().toLowerCase());
    }
    else
    {
      setSearch('');
    }
  }

  return (
    <main className='flex-1 bg-neutral-50 pb-10'>
      <div className="max-w-screen-2xl mx-auto px-4">
        <Searcher handelSearch={handelSearch}/>

        {
          search === '' ?
          (
            <div className="flex flex-col md:grid md:grid-cols-6 gap-4">
              <div className="md:mt-28 pt-2 w-full">
                <div className="md:sticky md:top-10">
                  <QuantityFilter setProductsNumber={setProductsNumber}/>

                  <OrderFilter ascDesc={ascDesc} setAscDesc={setAscDesc} setSort={setSort}/>

                  <MinMaxPriceFilter data={{minPrice, handleSetMinPrice, maxPrice, handleSetMaxPrice, max}}/>

                  <CheckFilter data={{name: 'Marca', list: ['hp', 'dell', 'acer', 'lenovo', 'apple'], filter: brandFilter, setFilter: setBrandFilter}}/>

                  <CheckFilter data={{name: 'Subcategoría', list: ['2-en-1', 'Computadores de Mesa', 'Portátiles', 'Todo-en-Uno'], filter: subcategoryFilter, setFilter: setSubcategoryFilter}}/>
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
                    computers.map((laptop, index) =>
                    (
                      <ComputerCard key={index} product={laptop}/>
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
                  computers.map((laptop, index) =>
                  (
                    <ComputerCard key={index} product={laptop}/>
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

export default Computers;