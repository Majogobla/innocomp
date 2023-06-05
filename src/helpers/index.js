import keysData from '../json/keys.json';

export const formatPrice = price =>
{
  return Number(price).toLocaleString('en-US', 
  {
    style: 'currency',
    currency: 'USD',
  });
}

export const keysIndexer = (quantity = 1, actualPage = 1, ascDesc = true, category = '') =>
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
  
  const result = productIndexer(keysDataSorted, quantity, actualPage);
  return result;
}


const productIndexer = (products = [], quantity = 0, actualPage = 1) =>
{
  const numberProducts = products.length;
  const numberPages = quantity <= 0 ? 1 : Math.ceil(numberProducts/quantity);
  const sliceArray = numberProducts > 0 ? products.slice((quantity * (actualPage - 1)), (actualPage * quantity)) : [];
  const result = {numberPages, sliceArray};
  return result;
}