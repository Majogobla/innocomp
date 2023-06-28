function OrderFilter({ascDesc, setAscDesc, setSort}) 
{
  return (
    <div className="flex flex-col xl:flex-row xl:gap-2 xl:items-center mt-6 w-full">
      <label htmlFor="sort" className="text-2xl font-extralight text-center">Ordernar: </label>

      <div className="flex flex-1 gap-1">
        <div className="px-1 border-gray-500 border rounded cursor-pointer" onClick={() => setAscDesc(!ascDesc)}>
          {ascDesc ? <div className="text-2xl text-center">&uarr;</div> : <div className="text-2xl text-center">&darr;</div>}
        </div>

        <select id="sort" className="w-full text-center text-xl py-1 shadow" onChange={e => setSort(e.target.value)}>
          <option  value="price">Precio</option>
          <option value="name">Nombre</option>
        </select>
      </div>
    </div>
  )
}

export default OrderFilter