import React, { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0)
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          
        `https://dummyjson.com/products?limit=100&skip=${
          count === 0 ? 0 : count * 20
        }`
        );
        const result = await response.json();
        console.log(result);
        setData(result.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [count]);

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap:'10px',
      padding: '10px 10px 10px 30px'
      
    }}>
      {data.map((item, index) => (
        <div style={{
          width: '350px',
          height: '350px',
          border: 'solid 1px',
          
        }} key={index}>
          <p>{item.title}</p>
          <p>{item.price}</p>
          
        </div>
      ))}
      <button style={{
        padding : '10px',
        
        
        
      }}>LoadMore</button>
    </div>
  );
};
export default LoadMoreData;
