function QuantityFilter({quantityArray = [12, 24, 36, 48, 60], setProductsNumber}) 
{
  return (
    <div className="flex flex-col xl:flex-row xl:gap-2 xl:items-center ">
      <label htmlFor="sort" className="text-2xl font-extralight text-center">Cantidad </label>

      <div className="flex flex-1 gap-1">
        <select id="sort" className="w-full text-center text-xl py-1 shadow rounded-lg" onChange={e => setProductsNumber(Number(e.target.value))}>
          {
            quantityArray.map(quantity =>
            (
              <option key={quantity} value={quantity}>{quantity}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default QuantityFilter