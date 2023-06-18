function Paginator({previousPage, pagesArray, setActualPage, actualPage, nextPage})
{
  return (
    <ul className="-space-x-px md:col-start-2 md:col-end-7 flex justify-between md:justify-center mt-10">
      <li>
        <button className="block px-3 py-2 ml-0 leading-tight text-black bg-white border border-gray-500 rounded-l-lg hover:bg-[#fb5910] hover:text-white" onClick={previousPage}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 font-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </li>

      {
        pagesArray.map(number =>
        (
          <li key={number} className="hidden md:block">
            <button className={`${actualPage === (number) ? 'bg-[#fb5910] text-white' : 'hover:bg-[#fb5910] hover:text-white'} w-10 py-2 ml-0 leading-tight border border-gray-500 `} onClick={() => setActualPage(number)}>{(number)}</button>
          </li>
        ))
      }

      <li>
        <button className="block px-3 py-2 ml-0 leading-tight text-black bg-white border border-gray-500 rounded-r-lg hover:bg-[#fb5910] hover:text-white "onClick={nextPage}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 font-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </li>
    </ul>
  )
}

export default Paginator