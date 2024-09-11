import React, { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=10&skip=10&select=title,price"
        );
        const result = await response.json();
        console.log(result);
        setData(result.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};
export default LoadMoreData;
