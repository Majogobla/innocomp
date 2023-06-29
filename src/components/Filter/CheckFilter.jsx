import { Dropdown } from 'flowbite-react';

function CheckFilter({data: {name, list, filter, setFilter}}) 
{
  const handleSetOption = e =>
  {
    if(e.target.checked)
    {
      const newOptions = [...filter];
      newOptions.push(e.target.value);
      setFilter(newOptions);
    }
    else
    {
      setFilter([...filter].filter(brand => brand !== e.target.value));
    }
  }

  return (
    <>
      <div className="mt-6 w-full text-2xl font-extralight">
        <Dropdown label={`${name} `} inline>
          <div className="w-full flex gap-4 items-center px-4">
            <input type="checkbox" className="w-4 h-4 text-[#fb5910] bg-gray-100 border-gray-300 rounded" onChange={handleSetOption} value="all" defaultChecked={true} id="all"/>

            <label htmlFor="all" className="text-2xl font-extralight cursor-pointer flex-grow">All</label>
          </div>
          
          {
            list.map(brand =>
            (
              <div key={brand} className="w-full flex gap-4 items-center px-4">
                <input type="checkbox" className="w-4 h-4 text-[#fb5910] bg-gray-100 border-gray-300 rounded" onChange={handleSetOption} value={brand.toLowerCase()} id={brand}/>
    
                <label htmlFor={brand} className="text-2xl font-extralight cursor-pointer flex-grow">{brand}</label>
              </div>
            ))
          }
        </Dropdown>
      </div>
    </>
  )
};

export default CheckFilter;