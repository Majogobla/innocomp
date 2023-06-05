import React, { useState } from 'react';

const Test = () => {
  const [myArray, setMyArray] = useState([3, 1, 2]);

  const handleSort = () => {
    const sortedArray = [...myArray].sort();
    setMyArray(sortedArray);
  };

  return (
    <div>
      <button onClick={handleSort}>Ordenar</button>
      <ul>
        {myArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;