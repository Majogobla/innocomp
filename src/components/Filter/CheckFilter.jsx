import { useState } from "react";

function CheckFilter({data: {list}}) 
{
  const [options, setOptions] = useState(['all']);

  const handleSetOption = e =>
  {
    if(e.target.checked)
    {
      const newOptions = [...options];
      newOptions.push(e.target.value);
      setOptions(newOptions);
    }
    else
    {
      setOptions([...options].filter(option => option !== e.target.value));
    }
  }

  return (
    <>
      <button id="dropdownCheckboxButton" data-dropdown-toggle="dropdownDefaultCheckbox" className="mt-6 w-full flex justify-between items-center text-white bg-[#fb5910] text-2xl font-extralight rounded-lg px-4 py-2 " type="button">
        Marca {' '}

        <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      <div id="dropdownDefaultCheckbox" className="z-10 hidden w-full bg-white divide-y divide-[#fb5910] rounded-lg shadow border-2 border-[#fb5910]">
        <ul className="p-3 space-y-3 text-2xl font-extralight flex flex-col" aria-labelledby="dropdownCheckboxButton">
          <li>
            <div className="w-full flex gap-2 items-center">
              <input type="checkbox" className="w-4 h-4 text-[#fb5910] bg-gray-100 border-gray-300 rounded" onChange={handleSetOption} value="all" defaultChecked={true}/>

              <label htmlFor="checkbox-item-1" className="ml-2 text-2xl font-extralight">Todas</label>
            </div>
          </li>

          {
            list.map(item =>
            (
              <li key={item}>
                <div className="w-full flex gap-2 items-center">
                  <input type="checkbox" className="w-4 h-4 text-[#fb5910] bg-gray-100 border-gray-300 rounded" onChange={handleSetOption} value={item}/>

                  <label htmlFor="checkbox-item-1" className="ml-2 text-2xl font-extralight">{item}</label>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
};

export default CheckFilter;