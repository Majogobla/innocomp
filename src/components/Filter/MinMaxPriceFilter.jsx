function MinMaxPriceFilter({data: {minPrice, handleSetMinPrice, maxPrice, handleSetMaxPrice, max}}) 
{
  return (
    <>
      <div className="flex flex-col mt-6 w-full">
        <label htmlFor="steps-range" className="text-2xl font-extralight text-center md:text-left">Precio Mínimo ${minPrice}</label>

        <input id="steps-range" type="range" min="0" max={max} value={minPrice} onChange={handleSetMinPrice} step="1" className="w-full h-2 rounded-lg appearance-none cursor-pointe bg-[#fb5910]"/>
      </div>

      <div className="flex flex-col mt-4 w-full">
        <label htmlFor="steps-range" className="text-2xl font-extralight text-center md:text-left">Precio Máximo ${maxPrice}</label>

        <input id="steps-range" type="range" min="0" max={max} value={maxPrice} onChange={handleSetMaxPrice} step="1" className="w-full h-2 rounded-lg appearance-none cursor-pointe bg-[#fb5910]"/>
      </div>
    </>
  )
};

export default MinMaxPriceFilter;