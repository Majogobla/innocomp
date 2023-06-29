import { useState, useEffect } from "react";
import { officeIndexer, officeSearch } from "../../helpers";
import OfficeCard from "./OfficeCard";
import QuantityFilter from '../../components/Filter/QuantityFilter';
import OrderFilter from '../../components/Filter/OrderFilter';
import MinMaxPriceFilter from '../../components/Filter/MinMaxPriceFilter';
import CheckFilter from '../../components/Filter/CheckFilter';
import Searcher from '../../components/Filter/Searcher';
import Paginator from "../../components/Paginator";

function Office() 
{
  const max = 700;
  const [office, setOffice] = useState([]);
  const [ascDesc, setAscDesc] = useState(true);
  const [sort, setSort] = useState('price');
  const [productsNumber, setProductsNumber] = useState(12);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pagesArray, setPagesArray] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(max);
  const [brandFilter, setBrandFilter] = useState(['all']);
  const [categoryFilter, setCategoryFilter] = useState(['all']);
  const [subcategoryFilter, setSubategoryFilter] = useState(['all']);
  const [search, setSearch] = useState('');

  useEffect(() =>
  {
    if(search === '')
    {
      const products = officeIndexer(productsNumber, actualPage, ascDesc, sort, minPrice, maxPrice, brandFilter, categoryFilter, subcategoryFilter);
      setOffice(products.sliceArray);
      setPagesArray(products.arrayPages);
      setTotalPages(products.numberPages);
    }
  },
  [ascDesc, sort, productsNumber, actualPage, minPrice, maxPrice, search, brandFilter, categoryFilter, subcategoryFilter]);

  useEffect(() =>
  {
    if(search === '')
    {
      setActualPage(1);
    }
  },
  [ascDesc, sort, productsNumber, minPrice, maxPrice, search]);

  useEffect(() =>
  {
    if(search !== '')
    {
      const officeFiltered = officeSearch(search);
      setOffice(officeFiltered.sliceArray);
      setPagesArray(officeFiltered.arrayPages);
      setTotalPages(officeFiltered.numberPages);
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

                  <CheckFilter data={{name: 'Marca', list: ['Epson', 'HP', 'Canon', 'Klip Xtreme'], filter: brandFilter, setFilter: setBrandFilter}}/>

                  <CheckFilter data={{name: 'Categoría', list: ['Consumibles y Media', 'Impresoras y Escáneres'], filter: categoryFilter, setFilter: setCategoryFilter}}/>

                  <CheckFilter data={{name: 'Subcategoría', list: ['Cartuchos de Toner e Ink-Jet', 'Escáneres', 'Suministros y Partes de Mantenimiento', 'Impresoras Multifuncionales', 'Accesorios', 'Impresoras Laser', 'Impresoras Dot-Matrix', 'Impresoras Plotter', 'Papel', 'Cintas de Impresion', 'Kit de Impresion', 'Impresoras Ink-Jet'], filter: subcategoryFilter, setFilter: setSubategoryFilter}}/>
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
                    office.map((product, index) =>
                    (
                      <OfficeCard key={index} product={product}/>
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
                  office.map((product, index) =>
                  (
                    <OfficeCard key={index} product={product}/>
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

export default Office;