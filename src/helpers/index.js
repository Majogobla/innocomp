import keysData from '../json/keys.json';

export const formatPrice = price =>
{
  return Number(price).toLocaleString('en-US', 
  {
    style: 'currency',
    currency: 'USD',
  });
}

export const keysIndexer = (quantity = 1, actualPage = 1, ascDesc = true, category = '', minPrice = 0, maxPrice = 100) =>
{
  let keysDataSorted = [];

  if(category === 'price')
  {
    keysDataSorted = [...keysData].sort((a, b) => ascDesc ? a.precio - b.precio : b.precio - a.precio);
  }
  else
  {
    keysDataSorted = [...keysData].sort((a, b) => ascDesc ? a.nombre.localeCompare(b.nombre) : b.nombre.localeCompare(a.nombre));
  }

  keysDataSorted = [...keysDataSorted].filter(keyState => keyState.precio >= minPrice & keyState.precio <= maxPrice);
  
  const result = productIndexer(keysDataSorted, quantity, actualPage);

  return result;
}

export const keysSearch = search =>
{
  let keysFiltered = [...keysData].filter(keyState => keyState.nombre.toLowerCase().includes(search));

  const result = {arrayPages: [], sliceArray: keysFiltered, numberPages: 1};

  return result;
}

const productIndexer = (products = [], quantity = 0, actualPage = 1) =>
{
  const numberProducts = products.length;
  const numberPages = quantity <= 0 ? 1 : Math.ceil(numberProducts/quantity);
  const sliceArray = numberProducts > 0 ? products.slice((quantity * (actualPage - 1)), (actualPage * quantity)) : [];
  let arrayPages = [];

  if(numberPages > 10)
  {
    if(actualPage <= 5)
    {
      let newPagesArray = [];
      for (let index = 1; index <= 10; index++) 
      {
        newPagesArray.push(index)
      }

      arrayPages = newPagesArray;
    }
    else if(((actualPage + 5) <= numberPages))
    {
      let newPagesArray = [];
      for (let index = actualPage - 5; index < actualPage + 5; index++) 
      {
        newPagesArray.push(index)
      }

      arrayPages = newPagesArray;
    }
    else
    {
      let newPagesArray = [];
      for (let index = numberPages - 9; index <= numberPages; index++) 
      {
        newPagesArray.push(index)
      }

      arrayPages = newPagesArray;
    }
  }
  else
  {
    let newPagesArray = [];
    for (let index = 1; index <= numberPages; index++) 
    {
      newPagesArray.push(index)
    }

    arrayPages = newPagesArray;
  }
    
  const result = {arrayPages, sliceArray, numberPages};

  return result;
}