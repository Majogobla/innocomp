function Searcher({handelSearch}) 
{
  return (
    <form onSubmit={handelSearch} className="mt-10"> 
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>

        <input type="text" id="default-search" className="block w-full p-4 pl-10 text-xl text-gray-900 border-2 border-[#fb5910] rounded-lg bg-transparent focus:outline-none" placeholder="Buscar" name="search"/>

        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#fb5910] hover:bg-[#AD3A05] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-4 py-2 transition-colors font-black">Buscar</button>
      </div>
    </form>
  )
};

export default Searcher;